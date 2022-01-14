import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ArticleCard(props) {

    return (
     
      <Card.Header 
      style={
        (props.displayType === 'suggested') ?
      {cursor:'pointer', color:'black', width:'80%', marginLeft:'auto', marginRight:'auto', textAlign: 'center', paddingRight: '.5rem', paddingLeft:'.5rem',marginTop:'1rem', marginBottom: '1rem', borderLeft: '2px solid black', borderRight: '2px solid black', borderBottom: '2px solid black'} 
      :
      {cursor:'pointer',color:'black', width:'80%', marginLeft:'auto', marginRight:'auto', textAlign: 'center',marginTop:'1rem', marginBottom: '1rem', borderLeft: '2px solid black', borderBottom: '2px solid black'}
    }
      onClick={()=>{
        alert('go to view page w/id', props.id)
        if(props.type === 'drafts'){
            window.open(`/read/draft/${props.id}`)
        }else if(props.type === 'published'){
            window.open(`/read/published/${props.id}`)
        }
       
    }}>
      
      
  
      <h3 
      style={(props.displayType === 'suggested')
      ?
      {overflow:'hidden',textOverflow:'ellipsis', whiteSpace:'nowrap'}:
       { fontSize:'1rem'}}
      >
      {props.title.toUpperCase()}
<br/>
<br/>
<p
style={{paddingBottom:'1rem',overflow:'hidden',textOverflow:'ellipsis', width:'90%',marginLeft:'auto', marginRight: 'auto', whiteSpace:'nowrap'}}
>



{props.subtitle}



</p>
      </h3>
    {(props.articleFrom !== 'homepage')
    ?
    <Card.Img 
    alt={props.image}
    src={props.image}
    style={(props.displayType === 'suggested')?{height:'4rem', width: '4rem', marginLeft:'auto',marginRight:'auto', marginTop:'1.5rem'}:{height:'10rem', width: '10rem', marginLeft:'auto',marginRight:'auto',marginTop:'1.5rem'}}
    /> 
    :  
    <p></p>
}

  <Card.Footer 
  style={{width: '99%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', padding:'1px'}}
  >
  By   {props.author} {props.datePublished} {props.timePublished}    </Card.Footer> 
      </Card.Header>
    )
}

export default ArticleCard
