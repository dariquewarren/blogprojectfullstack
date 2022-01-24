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
     
      <Card.Header 
      style={
       
      {cursor:'pointer',color:'black', width:'80%', marginLeft:'auto', marginRight:'auto', textAlign: 'center',marginTop:'1rem', marginBottom: '1rem', borderLeft: '2px solid black', borderBottom: '2px solid black'}
    }
      onClick={()=>{
        handleCardRedirect()
       
    }}>
      
      
  
      <h3 
      style={{ fontSize:'1rem'}}
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
 

  <Card.Footer 
  style={{width: '99%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', padding:'1px'}}
  >
  By   {props.author} {props.datePublished} {props.timePublished}    </Card.Footer> 
      </Card.Header>
    )
}

export default ArticleCard
