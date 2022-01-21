import React, {useState, useEffect, useRef} from 'react'
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';// css
import SuggestedArticles from './SuggestedArticles'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function Article(props) {

   

    useEffect(()=>{
        
       },[])
    return (
       <Container>
       
       {(props.id)?
        <div style={{marginBottom:'2rem'}}>
        <h1 className='text-center mt-2rem mb-2rem'>{props.title}</h1>
<h4 style={{marginBottom:'1rem',marginTop:'1rem'}}>{props.subtitle}</h4>
<h6 style={{marginBottom:'1rem',marginTop:'1rem'}}>By {props.author}</h6>

<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center',marginBottom:'2rem',marginTop:'2rem'}}>
<p  style={{width:'50%', textAlign:'left'}}>{props.datePublished}</p>
<p style={{width:'50%', textAlign:'right'}}>{props.timePublished}</p>
</div>
<div style={{marginBottom:'2rem',marginTop:'2rem'}}>
<img src={props.image} style={{height: '25rem', width:'80%', marginLeft:'10%', marginRight:'10%'}}/>

</div>
{ReactHtmlParser(props.article)}
</div>
         :
        <p>wait for it.....</p>
        }
       
       </Container>
    )
}



export default Article
