import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function LoginForm() {
    const [userEmail, setUserEmail] = useState(undefined)
    const [userPassword, setUserPassword] = useState(undefined)

    const handleLogin =async (email, password)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
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
        <h1>Sign Up</h1>
        <Form>
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
        </Form> 
        </div>
    )
}

export default LoginForm
