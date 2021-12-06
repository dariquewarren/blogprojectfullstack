import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ArticleCard from './ArticleCard'
import Loading from './Loading'

const ViewDrafts =  (props)=> {
const [mappedArray, setMappedArray] = useState([])
    

useEffect(()=>{
if(mappedArray.length < 1 || !mappedArray){
    fetch('/drafts/all').then((response)=>{
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
        <Container fluid style={{border: '2px dashed red'}}>
        <Table bordered striped style={{width: '25%'}}>
        <thead>
        <tr>
        
        <th style={{width: '25%'}}>#</th>
        <th style={{width: '25%'}}>Title</th>
        <th style={{width: '25%'}}>Date added</th>
        <th style={{width: '25%'}}>Time Added</th>
        </tr>
       
        </thead>
        <tbody>
        {
            mappedArray.map((m)=>{
                return(
                    <tr key={m.id}>
                    <th >{m.id}</th>
                    <th >{m.title}</th>
                    <th >{m.datePublished}</th>
                    <th >{m.timePublished}</th>
                    </tr>
                   
                )
            })
        }
        </tbody>
        </Table>
        <h1> your drafts</h1>
 
        {(mappedArray.length > 0)
                ?
            mappedArray.map((m)=>{
                return (
                    <ArticleCard key={m.id} {...m}/>
                )
            })
            :
            <Loading/>
        }
        

        </Container>
    )
}

export default ViewDrafts
