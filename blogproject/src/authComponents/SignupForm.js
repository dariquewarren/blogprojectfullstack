import React, {useState, useRef} from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {signUpUser} from '../Firebase'

function SignupForm(props) {
const [userEmail, setUserEmail] = useState(undefined)
const [userPassword, setUserPassword] = useState(undefined)
const [photoURL, setPhotoURL]=useState(undefined)
const [displayName, setDisplayName]=useState(undefined)

const [signupSuccess, setSignupSuccess] = useState(false)









    return (
        <Container>
        <h1 className='text-center' >{(signupSuccess)?'Sign Up Succesful!':'Sign Up'}</h1>
     

    <Form
    style={{width:'50%',marginLeft:'auto', marginRight:'auto'}}
    onSubmit={(e)=>{
        e.preventDefault()
        signUpUser(userEmail, userPassword)

        window.location.assign('/')
    }}
    >

    
   <Form.Group
    className='m-2'
    >
    <Form.Label>Email</Form.Label>
    <Form.Control required type='email' 
    onChange={(e)=>{
        e.preventDefault()
        setUserEmail(e.target.value)
    }} />
    </Form.Group>

    <Form.Group
    className='m-2'
    >
    <Form.Label
    >Password</Form.Label>
    <Form.Control 
    required type='password' minLength={6}
    onChange={(e)=>{
        e.preventDefault()
        setUserPassword(e.target.value)
    }} />
    </Form.Group>

   

<Button
className='m-2'
 type='submit'
>Submit</Button>
    </Form>  
   
    
        </Container>
    )
}

export default SignupForm
