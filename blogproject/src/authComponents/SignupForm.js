import React, {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {userSignUp} from '../APICalls'
function SignupForm(props) {
const [userEmail, setUserEmail] = useState(undefined)
const [userPassword, setUserPassword] = useState(undefined)
const [signupSuccess, setSignupSuccess] = useState(false)
const UserData = {
    email: userEmail,
    password: userPassword
}

const handleSignup = async ()=>{
  await userSignUp(UserData).then(async (data)=>{
    setSignupSuccess(!signupSuccess)
   })
   
}

    return (
        <div>
        <h1>{(signupSuccess)?'Sign Up Succesful!':'Sign Up'}</h1>
    <Form
    onSubmit={(e)=>{
        e.preventDefault()
        handleSignup()
       console.log(UserData)
    }}
    >

    <Form.Group>
    <Form.Label>email</Form.Label>
    <Form.Control required type='email' 
    onChange={(e)=>{
        e.preventDefault()
        setUserEmail(e.target.value)
    }} />
    </Form.Group>

    <Form.Group>
    <Form.Label>password</Form.Label>
    <Form.Control required type='password' minLength={6}
    onChange={(e)=>{
        e.preventDefault()
        setUserPassword(e.target.value)
    }} />
    </Form.Group>
<Button type='submit'
>Submit</Button>
    </Form>  
        </div>
    )
}

export default SignupForm
