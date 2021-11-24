import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

function ArticleCard(props) {
    console.log(props)
    return (
        <Container style={{width:'100%'}}>
        <Card 
        
        style={{border: '1px solid black', width: '60%',marginRight: 'auto',marginLeft: 'auto', textAlign: 'center'}}
        onClick={()=>{
            alert('go to view page w/id')
            console.log('go to view page')
        }}
        >
        
    <img 
    alt={props.image}
    src={props.image}
    style={{height:'6rem', width: '6rem', marginLeft:'auto',marginRight:'auto'}}
    /> 
        <Card.Title> {props.title}</Card.Title>
    <Card.Body>

    
    {props.subtitle}
    <Card.Footer style={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    <p 
    style={{width: '40%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left', paddingLeft:'2px'}}
    >
    {props.author}</p> 
    <p
    style={{width: '40%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'right', paddingRight:'2px'}}
    >
    {props.datePublished}</p> </Card.Footer>
    </Card.Body>
        </Card>
        </Container>
    )
}

export default ArticleCard
