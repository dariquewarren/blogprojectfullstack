import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {GiPokecog} from 'react-icons/gi'
import ReactQuill from 'react-quill'; // ES6
import {updatePublished, deleteSinglePublishedArticle} from'./APICalls'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function AdminEditView(props) {
    
    const [userCheck, toggleUserCheck] = useState(false)
    const [userDecisionType, toggleUserDecisionType] = useState(false)

    
    const [showTitleInput, toggleTitleInput] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [showSubtitleInput, toggleSubtitleInput] = useState(false)
    const [newSubtitle, setNewsubtitle] = useState('')
    const [showImageInput, toggleImageInput] = useState(false)
    const [newImage, setNewImage] = useState('')
    const [showArticleInput, toggleArticleInput] = useState(false)
    const [newArticle, setNewArticle] = useState('')
    const [pageMessage,setPageMessage] = useState('')

    const submitUpdate =(articleObject, articleID)=>{
        updatePublished(articleObject, articleID)
        console.log('update this Article', updatedArticle)
    }

    const deleteArticle =(theID)=>{
        deleteSinglePublishedArticle(theID)
        console.log('delete this Article', updatedArticle)
    }

    const handleUserDecision = (decisionType, currentObject, currentID)=>{
// submit article, delete article

switch(decisionType){
    case 'submit':
        submitUpdate(currentObject, currentID);
        break;
        case 'delete':
            deleteArticle(currentID);
            break;
            default:
                alert('no decision type')
}
    }

const baseArticle ={
    title:props.title,
    subtitle: props.subtitle,
    image: props.image,
    article: props.article
}
const updatedArticle={
    title:(newTitle)?newTitle: props.title,
    subtitle:(newSubtitle)?newSubtitle: props.subtitle,
    image:(newImage)?newImage: props.image,
    article:(newArticle)?newArticle: props.article,
    updatedOn:'1/22/33',
    updatedAt: '12:39'
}

useEffect(()=>{
    setPageMessage('Edit View')
}, [])


    return <Container style={{textAlign:'center'}}>
    <Button variant='primary'
    onClick={()=>{
        toggleUserCheck(true)
        toggleUserDecisionType('submit')

       
    }}
    >Submit All Changes</Button>
    <Button variant='success'
    onClick={()=>{
        props.toggleEditMode(false)
    }}
    >Go Back</Button>
    <Button variant='danger' 
    onClick={()=>{
        toggleUserCheck(true)
        toggleUserDecisionType('delete')

        
    }}
    >Delete Article</Button>

    {(userCheck && userDecisionType )?<div>
        <h6>Are you Sure you want to {userDecisionType}?</h6>
        <Button variant='danger'>no</Button>
        <Button variant='success' onClick={()=>{
            handleUserDecision(userDecisionType,updatedArticle, props.id)
            setPageMessage('SUBMITTING....YOUR...CHANGES')
            alert(`${userDecisionType}`)
            setTimeout(()=>{
                window.location.reload(true)
            },[2000])
        }}>yes</Button>

        </div> : <p></p>}

<h1>{pageMessage}</h1>

    <img src={props.image} style={{height:'10rem', width:'10rem'}} />
  
    <h1
    > <GiPokecog
    style={{cursor:'pointer'}}
    onClick={()=>{
        toggleTitleInput(!showTitleInput)
    }} />
    {updatedArticle.title}  </h1>
    {(showTitleInput)
        ?
        <Form
        onSubmit={(e)=>{
            e.preventDefault()
            toggleTitleInput(false)
            console.log('new title', newTitle, 'updatedArticle', updatedArticle)
        }}
        >
        
        <Form.Control type='text' value={updatedArticle.title} value={updatedArticle.title} onChange={(e)=>{
            e.preventDefault()
            setNewTitle(e.target.value)

        }}/>
        <Button type='submit' variant='success'>Submit</Button>
        <Button  variant='warning'
        onClick={(e)=>{
            e.preventDefault()
            setNewTitle(baseArticle.title)
        }}
        >Reset</Button>

        </Form>
        :
        <p></p>
    }
    <h3
    
    >
    <GiPokecog
    style={{cursor:'pointer'}}
    onClick={()=>{
        toggleSubtitleInput(!showSubtitleInput)
    }} />
    {updatedArticle.subtitle}</h3>
    {(showSubtitleInput)
        ?
        <Form.Control type='text' value={updatedArticle.subtitle} onChange={(e)=>{
            e.preventDefault()
            setNewsubtitle(e.target.value)
        }}/>
        :
        <p></p>
    }
    <Container>
    {(showArticleInput)
        ?
        <Form
        onSubmit={(e)=>{
        e.preventDefault()
        toggleArticleInput(false)
        console.log('updatedArticle', updatedArticle)
        }}
        >
        <Form.Control type='text' value={updatedArticle.article}
                        onChange={(e)=>{
                            setNewArticle(e.target.value)
                        }} />
                        <Button type="submit">Submit</Button>
                        <Button onclick={()=>{
                            setNewArticle(baseArticle.article)
                        }} >Reset</Button>

        </Form>
        :
       <p></p>
    }
    <h6>
    <GiPokecog
    style={{cursor:'pointer'}}
    onClick={()=>{
        toggleArticleInput(!showArticleInput)
    }} />
    {ReactHtmlParser(updatedArticle.article)}
    </h6>
   

    

  
    </Container>
    
  
    </Container>;
}

export default AdminEditView;
