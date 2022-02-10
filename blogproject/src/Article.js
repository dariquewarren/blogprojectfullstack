import React, {useState, useEffect, useRef} from 'react'
import 'react-sharingbuttons/dist/main.css'
import Row from 'react-bootstrap/Row'
import Loading from './Loading'
import Container from 'react-bootstrap/Container';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {Facebook, Twitter, Reddit} from 'react-sharingbuttons'

function Article(props) {
const tagsWidth = (props.tags) ? (100 / props.tags.length) - 8 : 50
   

    useEffect(()=>{
        
       },[props])
    return (
       <Container >
       
      
        <div style={{borderBottom:'3px solid black', marginBottom:'1rem', width:'98%', marginLeft:'auto', marginRight:'auto'}}>
        <h1 className='text-center mt-2rem mb-2rem'>{props.title.toUpperCase()}</h1>
<h5 style={{textAlign:'center',marginBottom:'1rem',marginTop:'1rem', fontStyle:'italic'}}>{props.subtitle}</h5>
<p style={{marginBottom:'1rem',marginTop:'1rem'}}>By {props.author}</p>

<div style={{borderBottom:'3px solid black' ,display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center',marginBottom:'2rem',marginTop:'2rem'}}>
<p  style={{width:'50%', textAlign:'left'}}>{props.datePublished}</p>
<p style={{width:'50%', textAlign:'right'}}>{props.timePublished}</p>

</div>

<Container style={{ display:'flex', flexDirection:'row'}}>
<Facebook  text='Facebook' url='http://www.google.com'/>

<Twitter text='Twitter' url='http://www.google.com'/>
<Reddit text='Reddit' url='http://www.google.com'/>



</Container>


<div style={{marginBottom:'2rem',marginTop:'2rem'}}>
<img src={props.image} style={{height: '25rem', width:'80%', marginLeft:'10%', marginRight:'10%'}}/>

</div>
<hr/>
<Container style={{paddingTop:'5rem'}}>
{ReactHtmlParser(props.article)} 

</Container>

</div>
         

<div 
style={{display:'flex', flexDirection:'row',borderBottom:'1px dashed black'}}>
<div style={{borderRight:'1px dashed black',width:'40%', marginLeft:'auto', marginRight:'auto'}}>
<h4 style={{textAlign:'left', marginLeft:'auto', marginRight:'auto'}}>Tags: </h4>
<div style={{display:'flex', flexDirection:'row'}}> 

{(props.tags)? props.tags.map((m)=>{
   return(
      <p key={m}
      style={{width:`${tagsWidth}%`, marginLeft:'auto', marginRight:'auto', textAlign:'center'}}
      >-{m}-</p>
   )
})
:
<p></p>
}
</div>
</div>

<div style={{width:'40%', marginLeft:'auto', marginRight:'auto'}}>
<h4 style={{textAlign:'left', marginLeft:'auto', marginRight:'auto'}}>Categories: </h4>

<div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
{(props.category)? props.category.map((m)=>{
   return(
      <p key={m}
      style={{width:`${tagsWidth}%`, marginLeft:'auto', marginRight:'auto', textAlign:'center'}}
      >-{m}-</p>
   )
})
:
<p></p>
}
</div>
</div>





</div>

       </Container>
    )
}



export default Article
