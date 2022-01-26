import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand'
import Container from 'react-bootstrap/Container'

function Header(props) {
    useEffect(()=>{

    },[props.trueArray])
    return (

        <Navbar   expand="lg" style={{borderBottom:'2px solid black'}} >
        
<div style={{marginBottom:'.5rem'}}>
<NavbarBrand href="/" style={{textAlign:'center', width: '50%'}} >Venita V. Johnson</NavbarBrand>
<Navbar.Toggle style={{width:'25%', marginLeft:'0px', marginRight:'auto'}}  aria-controls="navbar" />

</div>
<br></br>
<Navbar.Collapse style={{ textAlign:'left'}}  id="navbar" >
<NavDropdown.Item   href='/' style={{width:'20%', marginLeft:'2px', marginRight:'auto'}} > Home</NavDropdown.Item>  
<NavDropdown.Item href='/write' style={{width:'20%', marginLeft:'2px', marginRight:'auto'}} >Write</NavDropdown.Item>  
<NavDropdown.Item style={{width:'20%', marginLeft:'2px', marginRight:'auto'}} >Published</NavDropdown.Item>  

</Navbar.Collapse>
       

        
      </Navbar>


       
    )
}

export default Header
