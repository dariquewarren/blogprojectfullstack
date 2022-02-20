import React, {useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Dayjs from 'dayjs'
import {updateArticleByID, deleteArticleByID} from './Firebase'
import {updatePublished, deleteSinglePublishedArticle} from'./APICalls'

import ReactHtmlParser from 'react-html-parser';

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
        // type, author, id, updateObject
        alert(`${currentObject.type}`)
        updateArticleByID(currentObject.type, currentObject.author, currentObject.id, currentObject);
        break;
        case 'delete':
            //type,author,id
            alert(`${currentObject.type}`)
            deleteArticleByID(currentObject.type, currentObject.author, currentObject.id);
            break;
            default:
                alert('no decision type')
}
    }
    const publishedTime = Dayjs().format('hh:mm:ss A')

    const referencePublishedTime = Dayjs().format('hhmmss')
    const changeTime = ()=>{
       

        if(publishedTime.includes('A') && publishedTime[0] ==='1' && publishedTime[1] === '2'){
          const militaryMidnight = referencePublishedTime.replace('12', '00')
return Number(militaryMidnight) 
        }else if(publishedTime.includes('P') && publishedTime[0] !=='1'  ){
          const militaryAfternoon = Number(referencePublishedTime) + 120000
          return militaryAfternoon
           
        }else if(publishedTime.includes('A') && publishedTime[0] ==='0'){
            const militaryMorning = Number(referencePublishedTime) 
return militaryMorning
        }else{
            return Number(referencePublishedTime)
        }
    }

const baseArticle ={
    id:props.id,
    title:props.title,
    subtitle: props.subtitle,
    image: props.image,
    article: props.article,
    timePublished: props.timePublished,
    datePublished: props.datePublished,
    author: props.author,
    sortableDate: props.sortableDate,
    sortableTime: props.sortableTime,
    category: props.categories,
    tags: props.tags,
    type: props.type

}
const updatedArticle={
    id:props.id,
    title:(newTitle)? newTitle: props.title,
    subtitle:(newSubtitle)? newSubtitle: props.subtitle,
    image:(newImage)? newImage: props.image,
    article:(newArticle)?  newArticle: props.article,   
    timePublished: props.timePublished,
    datePublished: props.datePublished,
    author: props.author,
    sortableDate: props.sortableDate,
    sortableTime: props.sortableTime,
        dateUpdated: Dayjs().format('M/DD/YYYY'),
        timeUpdated: Dayjs().format('hh:mm A'),
        sortableUpdateTime: changeTime(),
        sortableUpdateDate: Dayjs().valueOf(),
        category: props.categories,
    tags: props.tags,
    type: props.type

}

useEffect(()=>{
    setPageMessage('Click Any Section To Open Edit View')
    console.log('baseArticle', baseArticle)
}, [])


    return <Container style={{textAlign:'center'}}>
    <h1>{pageMessage}</h1>

    <Container
    style={{marginBottom:'1.5rem', borderBottom: '4px solid black'}}
    >
    <Button variant='primary'
    onClick={()=>{
        toggleUserCheck(true)
        toggleUserDecisionType('submit')

       
    }}
    >Submit All Changes</Button>

    <Button variant='danger' 
    onClick={()=>{
        toggleUserCheck(true)
        toggleUserDecisionType('delete')

        
    }}
    >Delete Article</Button>

    <Button variant='success'
    onClick={()=>{
        props.toggleEditMode(false)
    }}
    >Go Back</Button>
    {(userCheck && userDecisionType )?<div
        style={{outline:'2px solid black', marginTop:'1.5rem', paddingBottom:'1rem'}}
        >
        <h1>Are you Sure you want to {userDecisionType}?</h1>
        <Button variant='danger'
        onClick={()=>{
            toggleUserCheck(false)
        }}
        >Close Options</Button>
        <Button variant='success' onClick={()=>{
            handleUserDecision(userDecisionType,updatedArticle, props.id)
            setPageMessage('SUBMITTING....YOUR...CHANGES')
            alert(`${userDecisionType}${props.id}`)
            setTimeout(()=>{
                window.location.reload(true)
            },[2000])
        }}>{(userDecisionType !== 'delete')? 'Submit Article Update' : 'Delete Article'}</Button>

        </div> : <p></p>}

    </Container>


    <div
    
    >
    <img src={updatedArticle.image} 
    alt='beauty'
    style={{cursor:'pointer',height:'10rem', width:'10rem'}} 
    onClick={()=>{
        toggleImageInput(!showImageInput)
    }}
    />
    </div>
  
{(showImageInput)
    ?

    
   
<Row
style={{outline:'2px solid black', paddingTop:'1rem', paddingBottom:'1rem', marginTop:'1rem', marginBottom:'1rem'}}
>

<div style={{width:'50%'}}>
    <Form
    style={{width:'100%', marginBottom: '.5rem'}}

    onSubmit={(e)=>{
        e.preventDefault()
        toggleImageInput(false)
    }}
    >  
    <Form.Group >
    <Form.Label>Upload Image</Form.Label>
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
    
<Button
variant='warning'
onClick={(e)=>{
    e.preventDefault()
setImage(baseArticle.image)
}}
>Reset</Button>
<Button
variant='danger'
onClick={()=>toggleImageInput(false)}
>Close</Button>
</Form>
</div>
<div style={{width:'50%'}}>
<Form
style={{width:'100%', marginBottom: '.5rem'}}

onSubmit={(e)=>{
    e.preventDefault()
    toggleImageInput(false)
}}
>
<Form.Group >
<Form.Label>Paste Image URL</Form.Label>
    <Form.Control 
    type='text'
    placeholder='PASTE URL'
    onChange={(e)=>{
        setImage(e.target.value)
    }}
    />
</Form.Group>


<Button
variant='warning'
onClick={(e)=>{
    e.preventDefault()
setImage(baseArticle.image)
}}
>Reset</Button>
<Button
variant='danger'
onClick={()=>toggleImageInput(false)}
>Close</Button>
    

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
      <Form.Group
      style={{outline:'2px solid black', paddingTop:'1rem', paddingBottom:'1rem', marginTop:'1rem', marginBottom:'1rem'}}

      >
      <Form.Label><h5>Edit Title</h5></Form.Label>
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
      <Button  variant='warning'
      onClick={(e)=>{
          e.preventDefault()
          setNewTitle(baseArticle.title)
      }}
      >Reset</Button>
      <Button
      variant='danger'
      onClick={()=>toggleTitleInput(false)}
      >Close</Button>
      </Form>
      </Form.Group>
        :
        <p></p>
    }
   
    <h3
    style={{cursor:'pointer', textAlign:'left'}}
    onClick={()=>{
        toggleSubtitleInput(!showSubtitleInput)
    }}
    >
    
    {updatedArticle.subtitle}</h3>
    {(showSubtitleInput)
        ?
   <Form.Group
   
   style={{outline:'2px solid black', paddingTop:'1rem', paddingBottom:'1rem', marginTop:'1rem', marginBottom:'1rem'}}
>
   <Form.Label><h5>Edit Subtitle</h5></Form.Label>
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
<Button  variant='warning'
onClick={(e)=>{
    e.preventDefault()
    setNewsubtitle(baseArticle.subtitle)
}}
>Reset</Button>  
<Button
variant='danger'
onClick={()=>toggleSubtitleInput(false)}
>Close</Button>
</Form>
   </Form.Group>
        :
        <p></p>
    }

    <div style={{borderBottom:'3px dashed black' ,display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center',marginBottom:'2rem',marginTop:'2rem'}}>
<p  style={{width:'50%', textAlign:'left'}}>{props.datePublished}</p>
<p style={{width:'50%', textAlign:'right'}}>{props.timePublished}</p>

</div>
    <Container>
    {(showArticleInput)
        ?
       <Form.Group
       style={{outline:'2px solid black', paddingTop:'1rem', paddingBottom:'1rem', marginTop:'1rem', marginBottom:'1rem'}}
>
       <Form.Label><h5>Edit Article</h5></Form.Label>
       
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
                       <Button
                       variant='warning'
                       onClick={()=>{
                           setNewArticle(baseArticle.article)
                       }} >Reset</Button>
                       <Button
                       variant='danger'
       onClick={()=>toggleArticleInput(false)}
       >Close</Button>

       </Form>
       </Form.Group>
        :
       <p></p>
    }
    <h5 style={{cursor:'pointer'}}
    onClick={()=>{
        toggleArticleInput(!showArticleInput)
    }}>
   
    {ReactHtmlParser(updatedArticle.article)}
    </h5>
   

    

  
    </Container>
    
  
    </Container>;
}

export default AdminEditView;
