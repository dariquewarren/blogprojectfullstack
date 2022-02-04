import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ArticleCard(props) {
const handleCardRedirect=() =>{
  switch(props.articleFrom){
case 'homepage':
  if(props.type === 'drafts'){
    window.open(`/read/draft/${props.id}`)
}else if(props.type === 'published'){
    window.open(`/read/published/${props.id}`)
}
  break;
  case 'admin view':
    alert('admin view. switch into an editing view')
    break;
    default:
      alert('default view published switch case')
  }
  
  
} 
    return (
      <Card 
      style={{marginBottom:'1.5rem', paddingTop:'.5rem', paddingBottom:'.5rem', backgroundColor:'grey'}}
      onClick={()=>{
       handleCardRedirect()
      
   }}
      >
      <Card.Img  style={{height: '10rem', width:'10rem', marginRight:'auto', marginLeft:'auto', marginBottom:'1rem'}}
      src={props.image} alt={`${props.title}`} />
      
      
      <h2 style={{textAlign:'center'}}>{(props.title.length < 35)?props.title.toUpperCase():`${props.title.substring(0, 35).toUpperCase()} ...`} </h2>
      <h5 style={{textAlign:'center'}}>{(props.subtitle.length < 30)?props.subtitle.toUpperCase():`${props.subtitle.substring(0, 30).toUpperCase()} ...`}</h5>
     <Card.Text style={{textAlign:'right', paddingRight:'3px'}}>By {props.author} on {props.datePublished}</Card.Text>
      </Card>
     
    )
}

export default ArticleCard
