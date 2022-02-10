import React, {useState, useEffect, useRef} from 'react'
import Loading from './Loading'
import Container from 'react-bootstrap/Container';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function Article(props) {
const tagsWidth = (100 / props.tags.length) - 8
   

    useEffect(()=>{
        
       },[props])
    return (
       <Container style={{display:'flex',flexDirection:'row' }}>
       
      
        <div style={{marginBottom:'3rem', width:'70%', marginLeft:'2%', marginRight:'2.5%'}}>
        <h1 className='text-center mt-2rem mb-2rem'>{props.title}</h1>
<h5 style={{textAlign:'center',marginBottom:'1rem',marginTop:'1rem', fontStyle:'italic'}}>{props.subtitle}</h5>
<p style={{marginBottom:'1rem',marginTop:'1rem'}}>By {props.author}</p>

<div style={{borderBottom:'3px solid black' ,display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center',marginBottom:'2rem',marginTop:'2rem'}}>
<p  style={{width:'50%', textAlign:'left'}}>{props.datePublished}</p>
<p style={{width:'50%', textAlign:'right'}}>{props.timePublished}</p>
</div>


<div style={{marginBottom:'2rem',marginTop:'2rem'}}>
<img src={props.image} style={{height: '25rem', width:'80%', marginLeft:'10%', marginRight:'10%'}}/>

</div>

{ReactHtmlParser(props.article)} 

</div>
         

<div style={{ height:'500px', borderTop: '2px solid black',borderBottom: '2px solid black',width: '25%', marginLeft:'2.5%', marginRight:'1px'}}>
<h4 style={{textAlign:'center'}}>Tags: </h4>
<hr/>
{(props.tags)? props.tags.map((m)=>{
   return(
      <p key={m}
      style={{width:`${tagsWidth}%`, marginLeft:'auto', marginRight:'auto', textAlign:'right'}}
      >{m}</p>
   )
})
:
<p></p>
}
<br/>
<h4 style={{textAlign:'center'}}>Categories: </h4>
<hr/>
{(props.category)? props.category.map((m)=>{
   return(
      <p key={m}
      style={{width:`${tagsWidth}%`, marginLeft:'auto', marginRight:'auto', textAlign:'center'}}
      >{m}</p>
   )
})
:
<p></p>
}

</div>

       </Container>
    )
}



export default Article
