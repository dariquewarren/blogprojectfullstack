import React, {useState, useRef} from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';// css
import Form from 'react-bootstrap/Form';
import Dayjs from 'dayjs'
import { db, writeUserData, addNewArticle, getArticlesByType} from './Firebase'


function CreateArticle(props) {
const [title, setTitle] = useState('title')
const [subtitle, setSubtitle] = useState('this is a test title')
const [article, setArticle] = useState('this is an article that im writing, i hope its not frghtening. this is maybe lightning alright and yes okay.')
const [image, setImage] = useState('blahal')
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
        <button
        onClick={()=>{
        //    console.log('article created', newArticle)
            console.log('imageRef', ImageRef.current.files)
        }}
        >test button</button>
        <Form.Group>
        <img src={image} style={{height: '15rem', width: '15rem'}}/>
<br/>
        <Form.Label>Image</Form.Label>
        <Form.Control type='text' placeholder="Image URL"  onChange={(e)=>{
            setImage(e.target.value)
        }}/>
        <Form.Control type='file' ref={ImageRef} onChange={(e)=>{
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
        <Form 
        onClick={(e)=>{
            e.preventDefault()
            console.log('article Submitted', newArticle)
        }}
        >

        <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' placeholder="Title" value={title}  onChange={(e)=>{
            setTitle(e.target.value)
        }}/>
        </Form.Group>

        <Form.Group>
        <Form.Label>Sub-Title</Form.Label>
        <Form.Control type='text' placeholder="Sub Title" onChange={(e)=>{
            setSubtitle(e.target.value)
        }}/>
        </Form.Group>

     

       




<br/>Quill Editor
<ReactQuill theme="snow" value={article}
                  onChange={(e)=>{
                      setArticle(e)
                   console.log(article)
                  }} />
                  <button type='submit'>Submit</button>
        </Form>
        </div>
    )
}

export default CreateArticle
