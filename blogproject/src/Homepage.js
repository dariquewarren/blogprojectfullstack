import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Card from 'react-bootstrap/Card'
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
        <Container fluid style={{border: '2px dashed red', backgroundColor:'grey'}}>
        <h1> read the latest</h1>
 
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
        

        </Container>
    )
}

export default Homepage
