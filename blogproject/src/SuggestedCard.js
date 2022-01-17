import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
function SuggestedCard(props) {
useEffect(()=>{
    console.log(props)
},[])
    return (
        <Card style={{width: '40%', marginLeft:'auto', marginRight:'auto', marginBottom:'2rem' }}>
        <Card.Header>
        {props.title}
        </Card.Header>
        <Card.Img src={props.image} style={{height:'5rem', width:'5rem', marginLeft:'auto', marginRight:'auto'}} />
        <Card.Header>
        {props.subtitle}
        </Card.Header>
        </Card>
    )
}

export default SuggestedCard
