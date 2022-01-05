import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

function ArticleCard(props) {

    return (
        <Card 
        
        style={(props.displayType === 'suggested') ?{border: '1px solid black', width:'50%', textAlign: 'center', margin: '.2rem', paddingRight: '.5rem', paddingLeft:'.5rem'} :{border: '1px solid black', width:'100%', textAlign: 'center', marginBottom: '1rem', marginTop: '1rem'}}
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
    style={(props.displayType === 'suggested')?{height:'4rem', width: '4rem', marginLeft:'auto',marginRight:'auto'}:{height:'10rem', width: '10rem', marginLeft:'auto',marginRight:'auto'}}
    /> 
    <Card.Body>

    
    <h4>
    {props.subtitle}
    </h4>
    <p 
    style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', padding:'1px'}}
    >
    By {props.author}  </p> 
   
    </Card.Body>
        </Card>
    )
}

export default ArticleCard
