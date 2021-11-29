import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
function LoginForm(props) {
    const auth = getAuth();

    const [userEmail, setUserEmail] = useState(undefined)
    const [userPassword, setUserPassword] = useState(undefined)

    const handleLogin =async (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            props.setUserInfo(user)
            console.log('user', user)
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
            handleLogin(userEmail, userPassword)
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
