import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

function ArticleCard(props) {

    return (
        <Container style={{width:'100%', marginBottom: '1rem'}}>
        <Card 
        
        style={{border: '1px solid black', width: '60%',marginRight: 'auto',marginLeft: 'auto', textAlign: 'center'}}
        onClick={()=>{
            alert('go to view page w/id', props.id)
            if(props.type === 'drafts'){
                window.open(`/read/draft/${props.id}`)
            }else if(props.type === 'published'){
                window.open(`/read/published/${props.id}`)
            }
           
        }}
        >
        
    
        <h1> {props.title}</h1>
        <img 
    alt={props.image}
    src={props.image}
    style={{height:'10rem', width: '10rem', marginLeft:'auto',marginRight:'auto'}}
    /> 
    <Card.Body>

    
    <h4>
    {props.subtitle}
    </h4>
    <h6 style={{borderTop: '2px solid black', display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
  </h6>  <p 
    style={{width: 'auto', marginLeft: '1rem', marginRight: 'auto', textAlign: 'left', paddingLeft:'2px'}}
    >
    By {props.author}  {props.datePublished}</p> 
    <p
    style={{width: '40%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'right', paddingRight:'2px'}}
    >
    </p> 
    </Card.Body>
        </Card>
        </Container>
    )
}

export default ArticleCard
