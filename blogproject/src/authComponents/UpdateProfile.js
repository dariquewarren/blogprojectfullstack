
import {getAuth} from 'firebase/auth';
import {updateUserProfile} from '../Firebase'
import React, {useState, useRef, useEffect} from 'react'
import { signUpUser } from "../Firebase";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'


function UpdateProfile(props) {
    const [email, setUserEmail] = useState(undefined)
    const [photoURL, setPhotoURL]=useState(undefined)
    const [displayName, setDisplayName]=useState(undefined)
    
    const [signupSuccess, setSignupSuccess] = useState(false)
    const ImageReference = useRef();
    

var currentUserObject = {
    email: (props.user)? props.user.email : 'none@nothing.com',
        photoURL:(props.user)?  props.user.photoURL: '12343455f',
        displayName:(props.user)? props.user.displayName : 'not logged in',
}
    var updateObject={
        email:(!email) ? currentUserObject.email: email ,
        photoURL:(!photoURL) ? currentUserObject.photoURL: photoURL ,
        displayName: (!displayName) ? currentUserObject.displayName: displayName 
    }
    console.log('profile page', props)
    
    useEffect(()=>{
        if(!props.user){
            window.location.assign('./login')
        }
    },[props.user])

    
        return (
            <Container>
            <h1 className='text-center' >{(signupSuccess)?'Update Succesful!':'Update Profile'}</h1>
            <Card style={{width:'50%', marginLeft:'auto', marginRight:'auto', textAlign:'center'}}>
   
            <h2>Changed</h2>
            <Card.Header
    style={{width:'50%', marginLeft:'auto', marginRight:'auto'}}
    >
<h6>    
Display Name: {updateObject.displayName}
</h6>

<h6>
Email: {updateObject.email}
</h6>

            
    </Card.Header>
    <Card.Body
    style={{ marginLeft:'auto', marginRight:'auto'}}
    >
    <Card.Img style={{width: '10rem', height:'10rem'}} src={updateObject.photoURL} />

    </Card.Body>
    

    </Card>

    <Card style={{width:'50%', marginLeft:'auto', marginRight:'auto', textAlign:'center'}}>
    <h2>Original</h2>
    <Card.Header
    style={{width:'50%', marginLeft:'auto', marginRight:'auto'}}
    >
<h6>    
Display Name: {displayName}
</h6>

<h6>
Email: {email}
</h6>

            
    </Card.Header>
    <Card.Body
    style={{ marginLeft:'auto', marginRight:'auto'}}
    >
    <Card.Img style={{width: '10rem', height:'10rem'}} src={currentUserObject.photoURL} />

    </Card.Body>
    

    </Card>
        <Form
        style={{width:'50%',marginLeft:'auto', marginRight:'auto'}}
        onSubmit={(e)=>{
            e.preventDefault()
            updateUserProfile(props.user,updateObject)
            console.log('props.user',props.user, 'updateObject', updateObject)
            setSignupSuccess(true)
        }}
        >
    
        
       
   
    
    
    <Form.Group
    className='m-2'
    >
    <Form.Label>Display Name</Form.Label>
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
        let fileReader = new FileReader(); 
    fileReader.readAsBinaryString(file); 
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
    
    <Button
    className='m-2'
     type='submit'
    >Submit</Button>
        </Form>  
            </Container>
        )
    }
    

export default UpdateProfile