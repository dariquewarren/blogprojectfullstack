import React, {useState} from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';// css
import Form from 'react-bootstrap/Form';
import { getDatabase, ref, set } from "firebase/database";

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
            addNewArticle(articleType, props.articleAuthor, newArticle)
        }}
        >test create button</button>
        <button
        onClick={()=>{
            getArticlesByType(articleType, props.articleAuthor)
        }}
        >test retrieve button</button>
        <Form>
        <input label='date' type='date' defaultValue='11/27/2021'/>
<br/>Quill Editor
<label></label>
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
