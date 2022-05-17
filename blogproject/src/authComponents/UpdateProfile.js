
import {getAuth} from 'firebase/auth';
import {updateUserProfile} from '../Firebase'
import React, {useState, useRef, useEffect} from 'react'
import { signUpUser } from "../Firebase";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Create a root reference
const storage = getStorage();
function UpdateProfile(props) {
    const [email, setUserEmail] = useState(undefined)
    const [photoURL, setPhotoURL]=useState(undefined)
    const [displayName, setDisplayName]=useState(undefined)
    
    const [updateMessage, changeUpdateMessage] = useState('')
    const profileImagesRef =(props.user) ? ref(storage, `images/${props.user.email}/profileImage.jpg`) : ''

    const ImageReference = useRef();

    const handleProfileChange =()=>{
        uploadBytes(profileImagesRef, ImageReference.current.files[0]).then((snapshot) => {
            getDownloadURL(ref(storage, `images/${props.user.email}/profileImage.jpg`)).then((data)=>{
                setPhotoURL(data)  
              })
          }).catch((error)=>{
              alert(`${error}`)
          });

        
    }
    

var currentUserObject = {
    email: (props.user)? props.user.email : '.',
        photoURL:(props.user)?  props.user.photoURL: '.',
        displayName:(props.user)? props.user.displayName : '.',
}
    var updateObject={
        email:(!email) ? currentUserObject.email: email ,
        photoURL:(!photoURL) ? currentUserObject.photoURL: photoURL ,
        displayName: (!displayName) ? currentUserObject.displayName: displayName 
    }

    console.log('profile page', props,'update object', updateObject)
    
    useEffect(()=>{
        if(props.user){
            changeUpdateMessage('Update Profile')
           }else if(!props.user){
            changeUpdateMessage('Please login to update profile')
            }else if(!props.user.displayName){
                changeUpdateMessage('Author Name REQUIRED to write articles. Create one below')
            }else{
                return
            }
       
    },[props.user, photoURL])

    
        return (
            <Container>
            <h1 className='text-center' >{updateMessage}</h1>
            <div style={{display:'flex',flexDirection:'row'}} >
        <Card style={{width:'20rem', marginLeft: 'auto', marginRight: 'auto', textAlign:'center', marginTop:'1rem', marginBottom:'1rem'}}>
        <h2>Current Profile</h2>

        <h6>    
        Display Name: {currentUserObject.displayName}
        </h6>
        
       
        <br/>
        {(!currentUserObject.photoURL)?<p></p>:
        <Card.Img style={{width: '85%', height:'10rem',borderRadius:'50%', marginLeft:'auto', marginRight:'auto'}} src={currentUserObject.photoURL} />

    }        <br/>
    <h6>
    Email: {currentUserObject.email}
    </h6>
        </Card>     
        <Card
        style={{width:'20rem', marginLeft: 'auto', marginRight: 'auto', textAlign:'center', marginTop:'1rem', marginBottom:'1rem' }}>
        <h2>Profile Changes</h2>
        <h6>    
Display Name: {updateObject.displayName}
</h6>
      <br/>

{(!updateObject.photoURL)?<p></p>:
<Card.Img style={{width: '85%', height:'10rem',borderRadius:'50%', marginLeft:'auto', marginRight:'auto'}} src={updateObject.photoURL} />

}
<br/>
<h6>
Email: {updateObject.email}
</h6>  
        </Card>

   
            </div>
      
        <Form
        style={{border:'2px solid green', width:'80%',marginLeft:'auto', marginRight:'auto', marginTop:'1rem', marginBottom:'1rem'}}
        onSubmit={(e)=>{
            e.preventDefault()
            updateUserProfile(props.user,updateObject)
            console.log('props.user',props.user, 'updateObject', updateObject)
            
            changeUpdateMessage('SUCCESS! Profile Updated')
        }}
        >
    
        
       
        <Form.Group
        className='m-2'
        >
        <Form.Label>
        Profile Picture (Optional)
        </Form.Label>
        <Form.Control
        ref={ImageReference}
         
        type='file'
        onChange={(e)=>{
        e.preventDefault()
        handleProfileChange()
        if(ImageReference.current){
            let file = ImageReference.current.files[0]
            let fileReader = new FileReader(); 
        fileReader.readAsDataURL(file); 
        fileReader.onload = function() {
        console.log('filereader result',fileReader.result);
        
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
    <Form.Label>Name / Nom de Plume (Required)</Form.Label>
    <Form.Control
    required={(props.user && !props.user.displayName) ? true : false}
    placeholder= {(props.user && !props.user.displayName) ? 'REQUIRED' : 'NEW Nom de plume'}
    type='text'
    onChange={(e)=>{
        setDisplayName(e.target.value)
    }}
    
    />
    </Form.Group>

        
    
    
        <Form.Group
        className='m-2'
        >
        <Form.Label>Email (Optional)</Form.Label>
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