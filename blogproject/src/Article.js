import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';

function Article(props) {
    return (
        <Container>
        <h1 style={{textAlign:'center'}}>{props.title}</h1>
        <h4 style={{textAlign:'left'}}>{props.subtitle}</h4>
        <Row>
        <p className='w-50' style={{textAlign:'left'}}>By {props.author}</p><p className='w-50 ' style={{textAlign:'right'}}> {props.datePublished}</p>
       </Row>
        <br/>
        <img src={props.image} style={{height: '20rem', width:'20rem'}}/>
<br/>
<h5>{props.article}</h5>
        </Container>
    )
}

export default Article
