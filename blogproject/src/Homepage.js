import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

function Homepage(props) {
const [mappedArray, setMappedArray] = useState([])
   
console.log(props)
    return (
        <Container fluid style={{border: '2px dashed red', display: 'flex', flexDirection: 'row', alignItems: 'top', justifyContent: 'center', maxWidth: '100vw'}}>
        
        <Col style={{border: '2px solid black', height: '100%', width: '30%', marginLeft:'0rem', marginRight:'0rem'}}>

<Button
onClick={()=>{
    
   
    console.log(props.trueArray)
}}
>test retrieve data</Button>
<br/>
<Button>sidebar button 2</Button>
<br/>
    <Button>sidebar button 3</Button>
<br/>
        this is column ONE: sidebar</Col>
        <Col style={{border: '2px solid black', height: 'auto', width: '60%', marginLeft:'0rem', marginRight:'auto'}}>
        this is column TWO: article card list
        <br/>
        {
            props.articleArray.map((m)=>{
                return (
                    <Card 
                    key={m.id}
                    style={{border: '1px solid black', width: '100%', textAlign: 'center'}}
                    onClick={()=>{
                        alert('go to view page w/id')
                        console.log('go to view page')
                    }}
                    >
                    <Card.Title> {m.title}</Card.Title>
                <Card.Body>

                <img 
                alt={m.image}
                src={m.image}
                style={{height:'6rem', width: '6rem', marginLeft:'auto',marginRight:'auto'}}
                /> 
                <br/>
                {m.subtitle}
                <Card.Footer style={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <p 
                style={{width: '40%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left', paddingLeft:'2px'}}
                >
                {m.author}</p> 
                <p
                style={{width: '40%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'right', paddingRight:'2px'}}
                >
                {m.datePublished}</p> </Card.Footer>
                </Card.Body>
                    </Card>
                )
            })
        }
        
        </Col>

        </Container>
    )
}

export default Homepage
