import React from 'react'
import SignupForm from './authComponents/SignupForm'

function AuthPage(props) {
    return (
        <div>
    <SignupForm userInfo={props.userInfo} setUserInfo={props.setUserInfo}/>        
        </div>
    )
}

export default AuthPage
