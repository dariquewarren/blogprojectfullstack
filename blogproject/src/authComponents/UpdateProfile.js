
import {getAuth} from 'firebase/auth';
import {updateUserProfile} from '../Firebase'
import React, {useState, useRef} from 'react'
import { signUpUser } from "../Firebase";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
function UpdateProfile(props) {
    var userToUpdate = getAuth()
    const [email, setUserEmail] = useState(undefined)
    const [photoURL, setPhotoURL]=useState(undefined)
    const [displayName, setDisplayName]=useState(undefined)
    
    const [signupSuccess, setSignupSuccess] = useState(false)
    const ImageReference = useRef();
    

    
    var updateObject={
        email,
        photoURL,
        displayName,
    }
    console.log('profile page', props)
    
    
        return (
            <Container>
            <h1 className='text-center' >{(signupSuccess)?'Update Succesful!':'Update Profile'}</h1>
    <Card>
    <Card.Header>
    <h3>Email: {props.user.email}</h3>

    </Card.Header>
    </Card>
        <Form
        style={{width:'50%',marginLeft:'auto', marginRight:'auto'}}
        onSubmit={(e)=>{
            e.preventDefault()
            updateUserProfile(userToUpdate.currentUser,updateObject)
            
            setSignupSuccess(true)
            console.log(userToUpdate)
        }}
        >
    
        
        <img 
    src={photoURL}
    
    style={{height:'8rem', width:'8rem', marginLeft:'auto', marginRight:'auto', display: (!photoURL) ? 'none' : ''}}
    />
    <Form.Group
    className='m-2'
    >
    <Form.Label>
    Profile Picture
    </Form.Label>
    <Form.Control
    className='w-50'
    ref={ImageReference}
     
    type='file'
    onChange={(e)=>{
    e.preventDefault()
    
    if(ImageReference.current){
        let file = ImageReference.current.files[0]
        console.log('current exists', file)
        let fileReader = new FileReader(); 
    fileReader.readAsDataURL(file); 
    fileReader.onload = function() {
    console.log('filereader result',fileReader.result);
    setPhotoURL(fileReader.result)
    }; 
    fileReader.onerror = function() {
    console.log('fileReader error',fileReader.error);
    }; 
        
    }else{
       
        console.log('no current', ImageReference.current)
    
    }
    }}
    />
    </Form.Group>
    
    
    <Form.Group
    className='m-2'
    >
    <Form.Label>Username</Form.Label>
    <Form.Control
    type='text'
    onChange={(e)=>{
        setDisplayName(e.target.value)
    }}
    
    />
    </Form.Group>
        <Form.Group
        className='m-2'
        >
        <Form.Label>Email</Form.Label>
        <Form.Control  type='email' 
        onChange={(e)=>{
            e.preventDefault()
            setUserEmail(e.target.value)
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
    

export default UpdateProfile