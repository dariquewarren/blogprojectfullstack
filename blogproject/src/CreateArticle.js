import React, {useState, useRef} from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';// css
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Article from './Article';

import Dayjs from 'dayjs'
import { db, writeUserData, addNewArticle, getArticlesByType} from './Firebase'
import { saveDraft, publishArticle } from './APICalls';
function ArticleForm(props){
    
    const ImageRef = useRef()
        
    const handleTags = (nextTag)=>{
        
console.log('tags', props.tags)
console.log('nextTag', nextTag)

    }
     
        return (
            <div>
            <Form.Label className='w-100 text-center' style={{fontWeight:'bold'}} >Create Article</Form.Label>
            <Button
            onClick={()=>{
            //    console.log('article created', newArticle)
                console.log('imageRef', ImageRef.current.files)
            }}
            >test button</Button>
            <img src={props.image} style={{height: '15rem', width: '15rem',display:'block', marginLeft: 'auto', marginRight: 'auto'}}/>

          <Container           style={{border: '20px groove grey'}}
          >
       

          <Form.Group className= 'mb-3' style={{fontWeight:'bold'}}>
    <br/>
    <Form.Label className='w-100 text-center' >{(props.imageURLInput)?'Set Image URL':'Upload Image'} </Form.Label>
    {
      (props.imageURLInput)
          ?
         <Row  
         style={{borderBottom: '2px solid red'}}
         >
         <Form.Control
         style={{marginLeft: '2rem', marginBottom: '.5rem'}}
         className='w-50 ' 
          type='text' placeholder="Image URL"  onChange={(e)=>{
          props.setImage(e.target.value)
      }}/> <Button
      style={{marginLeft: '2rem', marginBottom: '.5rem'}}

      className='w-25'
      onClick={(e)=>{
      e.preventDefault()
      props.setImageURLInput(!props.imageURLInput)
      }}
      >{(props.imageURLInput)? 'Switch to Upload' : 'Switch to URL' }</Button>
         </Row>
          :
    <Row
    style={{borderBottom: '2px solid red'}}

    >
    
    <Form.Control 
    style={{marginLeft: '2rem', marginBottom: '.5rem'}}
    type='file' 
    className='w-50' ref={ImageRef} onChange={(e)=>{
      e.preventDefault()
    
      if(ImageRef.current){
          let file = ImageRef.current.files[0]
          console.log('current exists', file)
          let fileReader = new FileReader(); 
    fileReader.readAsDataURL(file); 
    fileReader.onload = function() {
    console.log('filereader result',fileReader.result);
    props.setImage(fileReader.result)
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
    <Button
    style={{marginLeft: '2rem', marginBottom: '.5rem'}}
    className='w-25 '
    onClick={(e)=>{
    e.preventDefault()
    props.setImageURLInput(!props.imageURLInput)
    }}
    >{(props.imageURLInput)? 'Switch to Upload' : 'Switch to URL' }</Button>
    </Row>
    
          } 
         </Form.Group>
         
         
         
         <Form style={{fontWeight:'bold'}}
          onClick={(e)=>{
              e.preventDefault()
              console.log('article Submitted', props.newArticle)
          }}
          >
    <Row          
     style={{borderBottom: '2px solid red'}}
    >

          <Form.Group
          className= 'mb-3' 
          as={Col}>
          <Form.Label className='w-100 text-center'>Title</Form.Label>
          <Form.Control

          type='text' placeholder="Title" value={props.title}  onChange={(e)=>{
              props.setTitle(e.target.value)
          }}/>
          </Form.Group>
    
          <Form.Group 
          as={Col}>
          <Form.Label className='w-100 text-center'>Sub-Title</Form.Label>
          <Form.Control
          type='text' placeholder="Sub Title" onChange={(e)=>{
              props.setSubtitle(e.target.value)
          }}/>
          </Form.Group>
    
          </Row>
          <Form.Group>
<Form.Label>Category</Form.Label>
<Form.Control type='text'/>
          </Form.Group>
          
          <Form.Group>
<Form.Label>Tags</Form.Label>
<Form.Control type='text' 
onChange={(e)=>{
    e.preventDefault()
    handleTags(e.target.value)
}}
/>
          </Form.Group>
            <br/>
            <Form.Label className='w-100 text-center'> Quill Editor</Form.Label>
    <ReactQuill style={{minHeight: '20rem', border: '2px solid black', marginTop:'2rem', marginBottom: '2rem'}} theme="snow" value={props.article}
                    onChange={(e)=>{
                        props.setArticle(e)
                    }} />
                    
          </Form>
          <div
          style={{marginBottom:'1rem'}}
          >
          <Button 
          className='bg-primary' 
          style={{width:'auto', marginLeft: 'auto', marginRight: 'auto'}}
          onClick={(e)=>{
            e.preventDefault() 
            props.toggleArticlePreview(!props.articlePreview)
        }} >Preview</Button>

          <Button 
          className='bg-success w-33'
          style={{width:'auto', marginLeft: 'auto', marginRight: 'auto'}}
          onClick={async ()=>{
              try{
               await saveDraft(props.newArticle)
                alert('draft saved')
              }catch(e){
                  console.log('error', e)
              }
        }}
 >
          Drafts
          </Button>

          <Button 
          className='bg-warning'
          style={{width:'auto', marginLeft: 'auto', marginRight: 'auto'}}
          onClick={async ()=>{
            try{
             await publishArticle(props.newArticle)
              alert('draft saved')
            }catch(e){
                console.log('error', e)
            }
      }}
           >
          Publish
          </Button>
          </div>


          </Container>
            </div>
        )
}

function CreateArticle(props) {

    const [title, setTitle] = useState('title')
    const [subtitle, setSubtitle] = useState('this is a test title')
    const [article, setArticle] = useState('this is an article that im writing, i hope its not frghtening. this is maybe lightning alright and yes okay.')
    const [image, setImage] = useState(undefined)
    const [imageURLInput, setImageURLInput] = useState(false)
        const [category, setCategory] = useState(undefined)
        const [tags, setTags] = useState([])

    const [articleType, setArticleType] = useState('published')
    const newArticle = {
        category,
         tags,  
        title,
        subtitle,
        article,
        image,
        author: "Darique Tester",
        datePublished: Dayjs().format('M/DD/YYYY'),
        timePublished: Dayjs().format('hh:mm A')
    }

    const [articlePreview, toggleArticlePreview] = useState(false)
    
    if(articlePreview){
return(
    <>
    
    <Button
    style={{position: 'sticky', top: '10px'}}
    onClick={()=>{
        toggleArticlePreview(false)
    }}
    > Close Preview</Button>

    <Button 
    className='bg-success w-33'
    style={{position:'sticky',top:'10px', width:'auto', marginLeft: 'auto', marginRight: 'auto'}}
    onClick={async ()=>{
        try{
    
         await saveDraft(props.newArticle)
        }catch(e){
            console.log('error', e)
        }
        console.log('published')

  }}
>
Save Draft
    </Button>

    <Button 
    className='bg-warning'
    style={{position:'sticky',top:'10px', width:'auto', marginLeft: 'auto', marginRight: 'auto'}}
    onClick={async ()=>{
      try{
       await publishArticle(props.newArticle)
        
      }catch(e){
          console.log('error', e)
      }
      console.log('published')
}}
     >
    Publish
    </Button>
 
    <Article {...newArticle} />
    </>
)
    }else{
return(
    <ArticleForm 
    newArticle={newArticle}
    title={title} setTitle={setTitle}
    subtitle={subtitle} setSubtitle={setSubtitle}
    article={article} setArticle={setArticle}
    image={image} setImage={setImage}
    imageURLInput={imageURLInput} setImageURLInput={setImageURLInput}
    articlePreview={articlePreview} toggleArticlePreview={toggleArticlePreview}
    />
)

    }
}

export default CreateArticle
