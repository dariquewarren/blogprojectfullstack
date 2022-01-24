import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Loading from './Loading'
import Nav from 'react-bootstrap/Nav'
import {getAllPublished} from './APICalls'
import SuggestedCard from './SuggestedCard'
const SuggestedArticles = (props) =>{
  
    useEffect(()=>{

       
        
        }, [props.article1, props.article2])
    return (
       <div style={{outline:'2px solid red' ,width:'100%', marginTop:'5rem', backgroundColor: 'grey', marginBottom: '2rem'}}>
       <h4 style={{textAlign: 'center'}}>Check these out too</h4>
     {(props.article1 && props.article2)
        ?
        <Nav>
        <SuggestedCard {...props.article1}/>
        <SuggestedCard {...props.article2}/>

        </Nav>
    :
    <Loading/>
        }
       </div>
    )
}

export default SuggestedArticles
