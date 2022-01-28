import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {BsMenuButton} from 'react-icons/bs'
function Header(props) {

    const handleCategoryFilter = (filterWord)=>{
        // grab base arrayy

        // props.trueArray
        const interimArray = props.trueArray
    
    // filter array by matches to filterWord
    var trueCategoryArray = []
    
    interimArray.map((m)=>{
        if(m.category.includes(filterWord.toUpperCase())){
    return trueCategoryArray.push(m)
     
        }else{
            return m
        }
    })
    
    console.log('trueCategoryArray', trueCategoryArray)
    
    
        // set main page array to new Category array
        // props.setPublishedArray
        props.setCategorySelected(filterWord)
        props.setPublishedArray(trueCategoryArray)
        // console.log('category filter')
        }
    useEffect(()=>{

    },[props.trueArray, props.categoryArray])
    return (

        <Navbar   expand="lg" style={{borderBottom:'2px solid black'}} >
        
<DropdownButton
as={ButtonGroup}
variant="secondary"
title={<BsMenuButton/>}
style={{marginLeft:'.5%', outline:'2px solid red', width:'auto'}}

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
<Dropdown.Divider/>
<h6 style={{textAlign: 'center'}}>Categories</h6>
{props.categoryArray.map((m)=>{
    return(
        <Dropdown.Item key={m} value={m}
        onClick={(e)=>{
            handleCategoryFilter(m)
        }}
        >
        {m}
        </Dropdown.Item>
    )
})}

</DropdownButton> 

<NavbarBrand href="/" style={{outline:'2px solid red', textAlign:'center', width: '80%'}} >Venita V. Johnson</NavbarBrand>


   

        
      </Navbar>


       
    )
}

export default Header
