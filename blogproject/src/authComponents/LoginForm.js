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
   




    const handleLogin =async (email, password)=>{
     const realUser = await signInUser(email, password)
    //  props.setAppUser(realUser)
    //  props.setAuthor(realUser.email)
     console.log('logged in user info', realUser)
    }
    return (
        <div>
        <Container 
        style={{display:'flex', flexDirection: 'row', width:'50%', marginLeft:'auto', marginRight:'auto'}}
         >
        <Form
        style={{display:'flex', flexDirection: 'row'}}
        onSubmit={(e)=>{
            e.preventDefault()
        }} >
        <Form.Group style={{width:'auto', marginLeft:'.5%', marginRight:'1%'}}>
        <Form.Control required type='email' 
        placeholder='Email'
        onChange={(e)=>{
            e.preventDefault()
            setUserEmail(e.target.value)
        }}
        />
        </Form.Group>
        <Form.Group style={{width:'auto', marginLeft:'1%', marginRight:'1%'}}>
        <Form.Control required 
        
        type='password'
        placeholder='Password'

        onChange={(e)=>{
            e.preventDefault()
            setUserPassword(e.target.value)
        }}
        />
        
        </Form.Group>

        <Form.Group
        style={{width:'auto', marginLeft:'.5%', marginRight:'1%'}}
        
        >
        <Button
        onClick={(e)=>{
            e.preventDefault()
            handleLogin(userEmail, userPassword)
        
        }}    
            >Login</Button>
        </Form.Group>
       
        </Form> 
</Container>

        </div>
    )
}

export default LoginForm
