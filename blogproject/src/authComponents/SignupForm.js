import React, {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
function SignupForm() {
const [userEmail, setUserEmail] = useState(undefined)
const [userPassword, setUserPassword] = useState(undefined)


const handleSignup = async (email, password)=>{
    const auth = getAuth();
await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log('user created', user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log('errorMessage:',errorMessage, 'errorCode:', errorCode )
  });
}

    return (
        <div>
    <Form
    onSubmit={(e)=>{
        e.preventDefault()
        handleSignup(userEmail, userPassword)
    }}
    >

    <Form.Group>
    <Form.Label>email</Form.Label>
    <Form.Control type='email' 
    onChange={(e)=>{
        e.preventDefault()
        setUserEmail(e.target.value)
    }} />
    </Form.Group>

    <Form.Group>
    <Form.Label>password</Form.Label>
    <Form.Control type='password' 
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
