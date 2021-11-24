import React, {useState, useRef} from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';// css
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Dayjs from 'dayjs'
import { db, writeUserData, addNewArticle, getArticlesByType} from './Firebase'


function CreateArticle(props) {
const [title, setTitle] = useState('title')
const [subtitle, setSubtitle] = useState('this is a test title')
const [article, setArticle] = useState('this is an article that im writing, i hope its not frghtening. this is maybe lightning alright and yes okay.')
const [image, setImage] = useState(undefined)
const [imageURLInput, setImageURLInput] = useState(false)

const [articleType, setArticleType] = useState('published')

const ImageRef = useRef()
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
      <img src={image} style={{height: '15rem', width: '15rem'}}/>
<br/>
<Form.Label>{(imageURLInput)?'Set Image URL':'Upload Image'} </Form.Label>
{
  (imageURLInput)
      ?
     <Row>
     <Form.Control className='w-50 m-1' type='text' placeholder="Image URL"  onChange={(e)=>{
      setImage(e.target.value)
  }}/> <Button
  className='w-25 m-1'
  onClick={(e)=>{
  e.preventDefault()
  setImageURLInput(!imageURLInput)
  }}
  >{(imageURLInput)? 'Switch to Upload' : 'Switch to URL' }</Button>
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
<Button
className='w-25 m-2'
onClick={(e)=>{
e.preventDefault()
setImageURLInput(!imageURLInput)
}}
>{(imageURLInput)? 'Switch to Upload' : 'Switch to URL' }</Button>
</Row>

      } 
     </Form.Group>
     
     
     
     <Form 
      onClick={(e)=>{
          e.preventDefault()
          console.log('article Submitted', newArticle)
      }}
      >
<Row>
      <Form.Group className= 'mb-3' as={Col}>
      <Form.Label>Title</Form.Label>
      <Form.Control type='text' placeholder="Title" value={title}  onChange={(e)=>{
          setTitle(e.target.value)
      }}/>
      </Form.Group>

      <Form.Group as={Col}>
      <Form.Label>Sub-Title</Form.Label>
      <Form.Control type='text' placeholder="Sub Title" onChange={(e)=>{
          setSubtitle(e.target.value)
      }}/>
      </Form.Group>

      </Row>

     




<br/>Quill Editor
<ReactQuill theme="snow" value={article}
                onChange={(e)=>{
                    setArticle(e)
                 console.log(article)
                }} />
                <Button className='bg-primary' type='submit'>Preview</Button>
      </Form>
      <Button className='bg-success w-50' >Drafts</Button>
      <Button className='bg-warning w-50' >Publish</Button>

      </Container>
        </div>
    )
}

export default CreateArticle
