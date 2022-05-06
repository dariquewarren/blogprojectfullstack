import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import SearchOptions from './SearchOptions'
import AlertText from './AlertText'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'

import {BsMenuButton} from 'react-icons/bs'

import {GiRabbit} from 'react-icons/gi'
import { getAuth } from "firebase/auth";

const auth = getAuth();

function Header(props) {

    useEffect(()=>{

    },[props.trueArray, props.categoryArray, auth])
    return (

<div >

<div style={{paddingTop:'.5rem', borderBottom:'10px solid black',display:'flex', flexDirection:'row', justifyContent:"center", alignItems: 'center'}} >
<div style={{width:'75%', textAlign:'left',display:'flex', flexDirection:'column', justifyContent:"center", alignItems: 'center'}}>
<div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:"center", alignItems: 'center'}}>
<GiRabbit
 style={{cursor:'pointer', width:'5%', height:'5%', marginLeft:'auto', marginRight:'auto'}} 
 onClick={()=>props.toggleLightMode(!props.lightMode)}
 /><GiRabbit
 style={{cursor:'pointer', width:'5%', height:'5%', marginLeft:'auto', marginRight:'auto'}} 
 onClick={()=>props.toggleLightMode(!props.lightMode)}
 /><GiRabbit
 style={{cursor:'pointer', width:'5%', height:'5%', marginLeft:'auto', marginRight:'auto'}} 
 onClick={()=>props.toggleLightMode(!props.lightMode)}
 />
<h1 style={{cursor:'pointer',width:'50%', textAlign:'center', fontStyle:'italic', fontFamily:'fantasy'}}
onClick={()=>window.location.assign('/')}
>
 This Evil Bunny
 
 
 </h1>
 <GiRabbit style={{cursor:'pointer', width:'5%', height:'5%', marginLeft:'auto', marginRight:'auto'}} 
 onClick={()=>props.toggleLightMode(!props.lightMode)}
 />
 
 <GiRabbit style={{cursor:'pointer', width:'5%', height:'5%', marginLeft:'auto', marginRight:'auto'}} 
 onClick={()=>props.toggleLightMode(!props.lightMode)}
 />
 <GiRabbit
 style={{cursor:'pointer', width:'5%', height:'5%', marginLeft:'auto', marginRight:'auto'}} 
 onClick={()=>props.toggleLightMode(!props.lightMode)}
 />
</div>

</div>


<div style={{width:'20%',  display:'flex', flexDirection:'row', justifyContent:"center", alignItems: 'center'}}>

<DropdownButton
variant="secondary"
title={<BsMenuButton/>}
style={{width:'auto', marginLeft:'auto',marginRight:'5px'}}
>

<Dropdown.Item  onClick={()=>{
    if(window.location.pathname === '/'){
props.setPublishedArray(props.trueArray)
props.setCategorySelected('HOME')


    }else{
        window.open('/','_self')
    }
}} >Home</Dropdown.Item>
<Dropdown.Item as={Link} to='/write' eventKey="2" >Write</Dropdown.Item>
<Dropdown.Item as={Link} to='/all/drafts' eventKey="3" >Edit Drafts</Dropdown.Item>
<Dropdown.Item as={Link} to='/all/published' eventKey="4" >Edit Published</Dropdown.Item>
<Dropdown.Item as={Link} to='/signup' eventKey="5" >Sign Up</Dropdown.Item>
<Dropdown.Item as={Link} to='/login' eventKey="6" >Login</Dropdown.Item>
<Dropdown.Item as={Link} to='/search' eventKey="7" >Search</Dropdown.Item>
<Dropdown.Item as={Link} to='/updateProfile' eventKey="8" >profile</Dropdown.Item>

</DropdownButton> 

<h6>Welcome, {props.author}</h6>
</div>


</div>


</div>

    )
}

export default Header
