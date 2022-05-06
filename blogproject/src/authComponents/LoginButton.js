import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import {signInUser} from '../Firebase'
import LoginForm from './LoginForm'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth()
function LoginButton() {
const [showSignIn, toggleSignIn] = useState(false)

  return (
    <div>
    {(showSignIn)? 
        <div>
        <Button
        onClick={()=>{
            toggleSignIn(false)
        }}
        >Close</Button>
        <LoginForm/>
    </div>
    :
    <Button
        onClick={()=>{
            toggleSignIn(true)
            console.log('login')
        }}
        >Login</Button>
    }
    </div>
    )
}

export default LoginButton