import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {signInUser} from '../Firebase'
import { getAuth, signInWithEmailAndPassword, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";


function LoginForm(props) {
    const auth = getAuth();

    const [userEmail, setUserEmail] = useState(undefined)
    const [userPassword, setUserPassword] = useState(undefined)
   




    const handleLogin = async (email, password)=>{
     await signInUser(email, password)
    //  props.setAppUser(realUser)
    //  props.setAuthor(realUser.email)
    //  console.log('logged in user info', realUser)
    }
    return (
        
        <Container
        className='w-50'
        >
        <h3 className='text-center' >Login</h3>
        <Form
        onSubmit={(e)=>{
            e.preventDefault()
            handleLogin(userEmail, userPassword)
        }} >
        <Form.Group 
        className='m-2'
        >
        <Form.Label>Email</Form.Label>
        <Form.Control required type='email' 
        placeholder='Type your email address'
        onChange={(e)=>{
            e.preventDefault()
            setUserEmail(e.target.value)
        }}
        />
        </Form.Group>
        <Form.Group 
        className='m-2'
        >
        <Form.Label>Password</Form.Label>

        <Form.Control required 
        
        type='password'
        placeholder='Type your password'

        onChange={(e)=>{
            e.preventDefault()
            setUserPassword(e.target.value)
        }}
        />
        
        </Form.Group>

       
        <Button
        className='m-2'
       type='submit'  
            >Login</Button>
      
       
        </Form> 
        </Container>
      


       
    )
}

export default LoginForm
