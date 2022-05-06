import React from 'react'
import Button from 'react-bootstrap/Button'
import {logOut} from '../Firebase'

function LogoutButton() {
  return (
    <Button
    onClick={()=>{
        logOut()
        console.log('logout')
    }}
    >Logout</Button>
  )
}

export default LogoutButton