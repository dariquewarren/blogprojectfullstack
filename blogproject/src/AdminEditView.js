import React, {useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import {GiPokecog} from 'react-icons/gi'
import ReactQuill from 'react-quill'; // ES6
import {updatePublished, deleteSinglePublishedArticle} from'./APICalls'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function AdminEditView(props) {
   const ImageRef = useRef()
    const [userCheck, toggleUserCheck] = useState(false)
    const [userDecisionType, toggleUserDecisionType] = useState(false)

    
    const [showTitleInput, toggleTitleInput] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const [showSubtitleInput, toggleSubtitleInput] = useState(false)
    const [newSubtitle, setNewsubtitle] = useState('')
    const [showImageInput, toggleImageInput] = useState(false)
    const [newImage, setImage] = useState('')
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

<h1 style={{cursor:'pointer'}}>{pageMessage}</h1>

    <div
    
    >
    <img src={updatedArticle.image} 
    style={{height:'10rem', width:'10rem'}} 
    onClick={()=>{
        toggleImageInput(!showImageInput)
    }}
    />
    </div>
  
{(showImageInput)
    ?

    
   
<Row
style={{outline:'2px solid red'}}
>
<div style={{width:'50%'}}>

    <Form
    style={{width:'100%', marginBottom: '.5rem', outline:'2px solid green'}}

    onSubmit={(e)=>{
        e.preventDefault()
        toggleImageInput(false)
    }}
    >  
    <Form.Group >
    <Form.Label>upload</Form.Label>
    <Form.Control 
    type='file' 
     ref={ImageRef} 
    onChange={(e)=>{
      e.preventDefault()
    
      if(ImageRef.current){
          let file = ImageRef.current.files[0]
          console.log('current exists', file)
          let fileReader = new FileReader(); 
    fileReader.readAsDataURL(file); 
    fileReader.onload = function() {
    console.log('filereader result',fileReader.result);
setImage(fileReader.result)
    }; 
    fileReader.onerror = function() {
    console.log('fileReader error',fileReader.error);
    }; 
          console.log('current exists', )
      }else{
          console.log('no current')
          console.log('no current', ImageRef.current)
    
      }
    }} />
    </Form.Group>
</Form>
</div>
<div style={{width:'50%'}}>
<Form
style={{width:'100%', marginBottom: '.5rem', outline:'2px solid green'}}

onSubmit={(e)=>{
    e.preventDefault()
    toggleImageInput(false)
}}
>
<Form.Group >
<Form.Label>Paste URL</Form.Label>
    <Form.Control 
    type='text'
    placeholder='PASTE URL'
    onChange={(e)=>{
        setImage(e.target.value)
    }}
    />
</Form.Group>


    

<Button type='submit' variant='primary'>Save</Button>
<Button
variant='danger'
onClick={(e)=>{
    e.preventDefault()
setImage(baseArticle.image)
}}
>Reset</Button>
    </Form>
    </div>
    </Row>
    :
    <p></p>
}
    





    <h1
    style={{cursor:'pointer'}}
    onClick={()=>{
        toggleTitleInput(!showTitleInput)
    }}>
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
        
        <Form.Control type='text' 
        value={updatedArticle.title} onChange={(e)=>{
            e.preventDefault()
            setNewTitle(e.target.value)

        }}/>
        <Button type='submit' variant='primary'>Save</Button>
        <Button  variant='danger'
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
    style={{cursor:'pointer'}}
    onClick={()=>{
        toggleSubtitleInput(!showSubtitleInput)
    }}
    >
    
    {updatedArticle.subtitle}</h3>
    {(showSubtitleInput)
        ?
       <Form
       onSubmit={(e)=>{
        e.preventDefault()
        toggleSubtitleInput(false)
        console.log('new subtitle', newSubtitle, 'updatedArticle', updatedArticle)
    }}
       >
       <Form.Control type='text' value={updatedArticle.subtitle} onChange={(e)=>{
        e.preventDefault()
        setNewsubtitle(e.target.value)
    }}/>
    <Button type='submit' variant='primary'>Save</Button>
    <Button  variant='danger'
    onClick={(e)=>{
        e.preventDefault()
        setNewsubtitle(baseArticle.subtitle)
    }}
    >Reset</Button>       </Form>
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
                        <Button type="submit" variant='primary'>Save</Button>
                        <Button
                        variant='danger'
                        onclick={()=>{
                            setNewArticle(baseArticle.article)
                        }} >Reset</Button>

        </Form>
        :
       <p></p>
    }
    <h6 style={{cursor:'pointer'}}
    onClick={()=>{
        toggleArticleInput(!showArticleInput)
    }}>
   
    {ReactHtmlParser(updatedArticle.article)}
    </h6>
   

    

  
    </Container>
    
  
    </Container>;
}

export default AdminEditView;
