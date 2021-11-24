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
import { apiObject } from './APICalls';
function ArticleForm(props){
    
    const ImageRef = useRef()
        
    
     
        return (
            <div>
            Create Article
            <Button
            onClick={()=>{
            //    console.log('article created', newArticle)
                console.log('imageRef', ImageRef.current.files)
            }}
            >test button</Button>
          <Container>
          <Form.Group className= 'mb-3'>
          <img src={props.image} style={{height: '15rem', width: '15rem'}}/>
    <br/>
    <Form.Label>{(props.imageURLInput)?'Set Image URL':'Upload Image'} </Form.Label>
    {
      (props.imageURLInput)
          ?
         <Row>
         <Form.Control className='w-50 m-1' type='text' placeholder="Image URL"  onChange={(e)=>{
          props.setImage(e.target.value)
      }}/> <Button
      className='w-25 m-1'
      onClick={(e)=>{
      e.preventDefault()
      props.setImageURLInput(!props.imageURLInput)
      }}
      >{(props.imageURLInput)? 'Switch to Upload' : 'Switch to URL' }</Button>
         </Row>
          :
    <Row>
    
    <Form.Control type='file' className='w-50 m-2' ref={ImageRef} onChange={(e)=>{
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
    className='w-25 m-2'
    onClick={(e)=>{
    e.preventDefault()
    props.setImageURLInput(!props.imageURLInput)
    }}
    >{(props.imageURLInput)? 'Switch to Upload' : 'Switch to URL' }</Button>
    </Row>
    
          } 
         </Form.Group>
         
         
         
         <Form 
          onClick={(e)=>{
              e.preventDefault()
              console.log('article Submitted', props.newArticle)
          }}
          >
    <Row>
          <Form.Group className= 'mb-3' as={Col}>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder="Title" value={props.title}  onChange={(e)=>{
              props.setTitle(e.target.value)
          }}/>
          </Form.Group>
    
          <Form.Group as={Col}>
          <Form.Label>Sub-Title</Form.Label>
          <Form.Control type='text' placeholder="Sub Title" onChange={(e)=>{
              props.setSubtitle(e.target.value)
          }}/>
          </Form.Group>
    
          </Row>
    
         
    
    
    
    
    <br/>Quill Editor
    <ReactQuill theme="snow" value={props.article}
                    onChange={(e)=>{
                        props.setArticle(e)
                     console.log(props.article)
                    }} />
                    <Button className='bg-primary' onClick={(e)=>{
                        e.preventDefault() 
                        props.toggleArticlePreview(!props.articlePreview)
                    }} >Preview</Button>
          </Form>
          <Button 
          onClick={async ()=>{
              try{
               await apiObject.saveDraft(props.newArticle)
                alert('draft saved')
              }catch(e){
                  console.log('error', e)
              }
        }}
          className='bg-success w-50' >
          Drafts
          </Button>



          <Button 
          onClick={async ()=>{
            try{
             await apiObject.publishArticle(props.newArticle)
              alert('draft saved')
            }catch(e){
                console.log('error', e)
            }
      }}
          className='bg-warning w-50' >
          Publish
          </Button>
    
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
    
    const [articleType, setArticleType] = useState('published')
    const newArticle = {
           
        title,
        subtitle,
        article,
        image,
        author: props.articleAuthor,
        datePublished: Dayjs().format('M/DD/YYYY'),
        timePublished: Dayjs().format('hh:mm A'),
        articleType: 'published'
    }

    const [articlePreview, toggleArticlePreview] = useState(false)
    
    if(articlePreview){
return(
    <>
    
    <Button
    onClick={()=>{
        toggleArticlePreview(false)
    }}
    > Close Preview</Button>

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
