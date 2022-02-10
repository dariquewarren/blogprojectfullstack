import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Loading from './Loading'
import Nav from 'react-bootstrap/Nav'
import SuggestedCard from './SuggestedCard'
const SuggestedArticles = (props) =>{
  
    useEffect(()=>{

       
        
        }, [props.title, props.article1, props.article2])
    return (
       <Container style={{backgroundColor:'#606060' ,width:'100%', marginTop:'2rem', marginBottom: '2rem'}}>
       <h4 style={{textAlign: 'center', color: 'whitesmoke'}}>Check these out too</h4>
     {(props.article1 && props.article2)
        ?
        <Nav>
        <SuggestedCard {...props.article1}/>
        <SuggestedCard {...props.article2}/>

        </Nav>
    :
    <Loading/>
        }
       </Container>
    )
}

export default SuggestedArticles
