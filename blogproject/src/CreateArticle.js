import React, {useState} from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';// css
import Form from 'react-bootstrap/Form';

import { db, writeUserData, addNewArticle, getArticlesByType} from './Firebase'


function CreateArticle(props) {
const [userId, setUserId] = useState(1)
const [title, setTitle] = useState('test title')
const [subtitle, setSubtitle] = useState('this is a test title')
const [article, setArticle] = useState('this is an article that im writing, i hope its not frghtening. this is maybe lightning alright and yes okay.')
const [image, setImage] = useState('blahal')
const [datePublished, setDatePublished] = useState('11/17/2021')
const [articleType, setArticleType] = useState('published')

    const newArticle = {
       
        title,
        subtitle,
        article,
        image,
        author: props.articleAuthor,
        datePublished,
        articleType
    }

 
    return (
        <div>
        Create Article
        <button
        onClick={()=>{
            console.log('article created')
        }}
        >test create button</button>
    
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
