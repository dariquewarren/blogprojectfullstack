import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function LoginForm() {
    return (
        <div>
        <h1>Sign Up</h1>
        <Form>
        <Form.Group>
        <Form.Label>email</Form.Label>
        <Form.Control type='email'/>
        </Form.Group>
        <Form.Group>
        <Form.Label>password</Form.Label>
        <Form.Control type='password' />
        </Form.Group>
        </Form> 
        </div>
    )
}

export default LoginForm
