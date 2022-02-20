import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {signInUser} from '../Firebase'
import { getAuth, signInWithEmailAndPassword, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";
function LoginForm(props) {
    const auth = getAuth();

    const [userEmail, setUserEmail] = useState(undefined)
    const [userPassword, setUserPassword] = useState(undefined)
   




    const handleLogin =async (email, password)=>{
     const realUser = await signInUser(email, password)
     props.setAppUser(realUser)
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
        
        </Form> 

        </div>
    )
}

export default LoginForm
