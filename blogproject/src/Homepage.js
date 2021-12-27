import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ArticleCard from './ArticleCard'
import Loading from './Loading'

const Homepage =  (props)=> {
const [mappedArray, setMappedArray] = useState([])
    

useEffect(()=>{
if(mappedArray.length < 1 || !mappedArray){
    fetch('/published/all').then((response)=>{
        return response.json()
       }).then((data)=>{
           if(!data.realData || data.realData[0] === undefined ){
           return  alert(data.message)  
           }else{
            return setMappedArray(data.realData)

           }
   
    })
}else {
    return
}
}, [mappedArray])

    return (
       <Container responsive style={{display:'flex', flexDirection: 'row'}}>
       
       <Nav className='flex-column ' style={{border:'2px solid black', width:'20vw', marginLeft: '2vw'}}>
       <Nav.Item> test</Nav.Item>
       <Nav.Item> test</Nav.Item>
       <Nav.Item> test</Nav.Item>
       </Nav>
       <Nav className='flex-column' style={{border:'2px solid black', width: '75vw'}}>
     
       

       {(mappedArray.length > 0)
               ?
           mappedArray.map((m)=>{
               return (
                   <ArticleCard articleFrom='homepage' key={m.id} {...m}/>
               )
           })
           :
           <Loading/>
       }
       

       </Nav>
       </Container>
    )
}

export default Homepage
