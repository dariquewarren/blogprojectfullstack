import React, {useState, useEffect, useRef} from 'react'
import Loading from './Loading'
import Container from 'react-bootstrap/Container';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function Article(props) {

   

    useEffect(()=>{
        
       },[props])
    return (
       <Container>
       
      
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
         
        
       
       </Container>
    )
}



export default Article
