import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
function SuggestedCard(props) {
const [title, setTitle] = useState(props.title)
const [subTitle, setSubTitle] = useState(props.subtitle)
const [image, setImage] = useState(props.image)

useEffect(()=>{
    
},[])
    return (
        <Card style={{width: '40%', marginLeft:'auto', marginRight:'auto', marginBottom:'2rem', backgroundImage: 'repeatingLinearGradient(45deg, #ccc, #ccc 30px, #dbdbdb 30px, #dbdbdb 60px)' }}>
        <Card.Title style={{textAlign:'center'}}>
        {title}

        </Card.Title>
        <Card.Img src={image} style={{height:'5rem', width:'5rem', marginLeft:'auto', marginRight:'auto'}} />

        <Card.Header style={{textAlign:'center'}}>
{subTitle}
        </Card.Header>
        </Card>
    )
}

export default SuggestedCard
