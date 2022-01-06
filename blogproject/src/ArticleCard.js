import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ArticleCard(props) {

    return (
      <Button variant='light' 
      style={(props.displayType === 'suggested')?{marginLeft:'auto', marginRight:'auto',marginBottom:'2rem' , height:'50%', width:'45%'}:{marginTop:'1.5rem', marginBottom:'.75rem',marginLeft:'2%',marginRight:'2%', width: '100%'}}
      onClick={()=>{
          alert('go to view page w/id', props.id)
          if(props.type === 'drafts'){
              window.open(`/read/draft/${props.id}`)
          }else if(props.type === 'published'){
              window.open(`/read/published/${props.id}`)
          }
         
      }}>
      <Card 
      style={(props.displayType === 'suggested') ?{backgroundColor:"white", color:'black',border: '1px solid black', width:'100%', textAlign: 'center', paddingRight: '.5rem', paddingLeft:'.5rem'} :{backgroundColor:"white",color:'black',border: '1px solid black', width:'100%', textAlign: 'center'}}

      >
      
  
      <Card.Header 
      style={(props.displayType === 'suggested')
      ?
      {overflow:'hidden',textOverflow:'ellipsis', width:'90%',marginLeft:'auto',marginRight: 'auto', whiteSpace:'nowrap'}:
       { color:'green'}}
      >
      {props.title}

      </Card.Header>
      <Card.Img 
  alt={props.image}
  src={props.image}
  style={(props.displayType === 'suggested')?{height:'4rem', width: '4rem', marginLeft:'auto',marginRight:'auto', marginTop:'1.5rem'}:{height:'10rem', width: '10rem', marginLeft:'auto',marginRight:'auto',marginTop:'1.5rem'}}
  /> 
  <Card.Body
  style={{overflow:'hidden',textOverflow:'ellipsis', width:'90%',marginLeft:'auto', marginRight: 'auto', whiteSpace:'nowrap'}}
  >

  
  
  {props.subtitle}

  <Card.Footer 
  style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', padding:'1px'}}
  >
  By {props.author}  </Card.Footer> 
 
  </Card.Body>
      </Card>
      </Button>
    )
}

export default ArticleCard
