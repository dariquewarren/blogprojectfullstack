import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import SearchOptions from './SearchOptions'
import AlertText from './AlertText'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/esm/Navbar'

import NavbarBrand from 'react-bootstrap/esm/NavbarBrand'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {BsMenuButton, BsSearch,BsLightbulb} from 'react-icons/bs'

import {GiRabbit} from 'react-icons/gi'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

function Header(props) {
const [showAlert, setShowAlert] =useState(false)
const [alertMessage, setAlertMessage] = useState('false')



    useEffect(()=>{

    },[props.trueArray, props.categoryArray])
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


</DropdownButton> 
<BsSearch style={{cursor:'pointer',height:'2rem', width:'2rem'}}
onClick={()=>{
    props.toggleSearch(!props.showSearch)
    props.setSearchLocation(undefined)
    props.setFilterMessage('')
    console.log('header props', props)
   
   }}
/>
<BsLightbulb
style={{cursor:'pointer',height:'2rem', width:'2rem'}}
onClick={()=>props.toggleLightMode(!props.lightMode)}
 />
</div>


</div>
<div>
{(props.showSearch)
    ?
<div style={{marginBottom: '4rem', borderBottom: '5px solid black'}} >
<AlertText showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />

<SearchOptions array={props.trueArray}   
filterMessage={props.filterMessage} setFilterMessage={props.setFilterMessage} setSearchLocation={props.setSearchLocation} searchLocation={props.searchLocation}
toggleSearch={props.toggleSearch}
setShowAlert={setShowAlert} setAlertMessage={setAlertMessage}
 />

 
  </div>
    :
 <p></p>   
    }
</div>
</div>

    )
}

export default Header
