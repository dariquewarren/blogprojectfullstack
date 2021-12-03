import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {userSignIn} from '../APICalls'
import { getAuth, signInWithEmailAndPassword, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";
function LoginForm(props) {
    const auth = getAuth();

    const [userEmail, setUserEmail] = useState(undefined)
    const [userPassword, setUserPassword] = useState(undefined)
   

const alternateLogin = async ()=>{

 await setPersistence(auth, browserLocalPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.

return signInWithEmailAndPassword(auth, userEmail, userPassword).then(userCredential => {
        const loggedInUser = userCredential.user
        userSignIn(loggedInUser.uid)
        props.setUserInfo(loggedInUser)
 return loggedInUser
       
       }).catch((error) => {
         // Handle Errors here.
         const errorCode = error.code;
         const errorMessage = error.message;
       });
    })
    

}


    const handleLogin =async (email, password)=>{
      await  signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            props.setUserInfo(user)
             
             return user.getIdToken().then(idToken => {
                // Session login endpoint is queried and the session cookie is set.
                // CSRF protection should be taken into account.
                // ...
                console.log('idToken', idToken)

                return userSignIn(idToken)
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorCode',errorCode, 'errorMessage', errorMessage)
          });
    }
    return (
        <div>
        <h1>Login</h1>
        <Form onSubmit={(e)=>{
            e.preventDefault()
            alternateLogin(userEmail, userPassword)
        }} >
        <Form.Group>
        <Form.Label>email</Form.Label>
        <Form.Control required type='email' 
        onChange={(e)=>{
            e.preventDefault()
            setUserEmail(e.target.value)
        }}
        />
        </Form.Group>
        <Form.Group>
        <Form.Label>password</Form.Label>
        <Form.Control required type='password'
        onChange={(e)=>{
            e.preventDefault()
            setUserPassword(e.target.value)
        }}
        />
        </Form.Group>

        <Button
        type='submit'
        >Login</Button>
        <Button onClick={(e)=>{
            e.preventDefault()
            signOut(auth).then(()=>{
                alert('signed out')
            }).catch((e)=>{
                console.log('error', e)
            })
        }} >Logout</Button>
        </Form> 

        </div>
    )
}

export default LoginForm
