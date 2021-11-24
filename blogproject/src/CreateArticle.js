import React, {useState} from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';// css
import Form from 'react-bootstrap/Form';
import Dayjs from 'dayjs'
import { db, writeUserData, addNewArticle, getArticlesByType} from './Firebase'


function CreateArticle(props) {
const [title, setTitle] = useState('test title')
const [subtitle, setSubtitle] = useState('this is a test title')
const [article, setArticle] = useState('this is an article that im writing, i hope its not frghtening. this is maybe lightning alright and yes okay.')
const [image, setImage] = useState('blahal')
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

 
    return (
        <div>
        Create Article
        <button
        onClick={()=>{
            console.log('article created', newArticle)
            console.log('Dayjs format', Dayjs().format('M/DD/YYYY'))
        }}
        >test button</button>
    
        <Form>
        <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' placeholder="Title" />
        </Form.Group>

        <Form.Group>
        <Form.Label>Sub-Title</Form.Label>
        <Form.Control type='text' placeholder="Sub Title" />
        </Form.Group>

        <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.Control type='text' placeholder="Image URL" />
        <Form.Control type='file' />

        </Form.Group>

       




<br/>Quill Editor
<ReactQuill theme="snow" value={article}
                  onChange={(e)=>{
                      setArticle(e)
                   console.log(article)
                  }} />
        </Form>
        </div>
    )
}

export default CreateArticle
