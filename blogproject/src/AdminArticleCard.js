import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import ReactHtmlParser from 'react-html-parser';


function AdminArticleCard(props) {
var RealArticle =(props.article.length > 100)?props.article.substring(0, 101): props.article

  return <Container style={{textAlign:'center'}}>
  {(props.editMode)
    
    ?
    <p></p>
    :
    <Container>
    <img src={props.image} alt={props.title} style={{height:'10rem', width:'10rem'}} />
  
    <h1>{props.title}</h1>
    
    <h3>{props.subtitle}</h3>
    <Container>
    <h6>
    {ReactHtmlParser(RealArticle)} ...
    </h6>
    
    </Container>
    </Container>
}
  <Button variant='primary'  
  style={{display: (props.editMode === false) ? '': 'none'}}

  onClick={()=>{
      props.toggleEditMode(!props.editMode)
  }}
  >Edit View</Button>
  

  </Container>;
}

export default AdminArticleCard;
