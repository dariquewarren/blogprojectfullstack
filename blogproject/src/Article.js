import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function Article(props) {
    return (
        <Container style={{marginBottom: '2rem'}}>
        <h1 style={{textAlign:'center'}}>{props.title}</h1>
        <h4 style={{textAlign:'left'}}>{props.subtitle}</h4>
        <Row>
        <p className='w-50' style={{textAlign:'left'}}>By {props.author}</p><p className='w-50 ' style={{textAlign:'right'}}> {props.datePublished}</p>
       </Row>
        <br/>
        <Container style={{maxWidth:'60%', textAlign: 'right'}}>
                <img src={props.image} style={{height: '20rem', width:'100%', display:'block', marginBottom:'2rem', marginLeft:'auto',marginRight:'0rem'}}/>
                </Container>

{ReactHtmlParser(props.article) }
        </Container>
    )
}

export default Article
