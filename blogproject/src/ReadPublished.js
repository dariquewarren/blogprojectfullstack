import React, {useState, useEffect} from 'react'
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';// css
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Article from './Article'
import { getSinglePublished ,updatePublished} from './APICalls';
import Loading from './Loading';
function ReadPublished(props) {

 const {id} = useParams()

const [draft, setDraft] = useState()
const [showEditMode, toggleEditMode] = useState(false)
const [showTitle, toggleTitle] = useState(false)
const [newTitle, setNewTitle] = useState()
const [newSubtitle, setNewSubtitle] = useState()
const [newTags, setNewTags] = useState()
const [newCategory, setNewCategory] = useState()
const [newImage, setNewImage] = useState()
const [newArticle, setNewArticle] = useState()



const updateObject = {
    title: (newTitle !== 'undefined')? newTitle: draft.title ,
    subtitle:(newSubtitle !== 'undefined')? newSubtitle: draft.subtitle, 
    article: (newArticle !== 'undefined')?newArticle: draft.article,
    category: (newCategory !== 'undefined')?newCategory: draft.category, 
    tags: (newTags !== 'undefined')?newTags: draft.tags,
    image:(newImage !== 'undefined')?newImage: draft.image
}



 useEffect(()=>{
 if(!draft){
    getSinglePublished(id).then((data)=>{
        return data.json()
    }).then((data)=>{
        if(!data.data || data.data.article === undefined ){
            return  alert(data.message)  
            }else{
             return setDraft(data.data)
 
            }
    })
 }else {
     return
 }
 }, [draft])


    return (
        <Container>
        <Button
        onClick={()=>{
            
            if(showEditMode){
                console.log('draft', draft)
                toggleEditMode(!showEditMode)
            }else if(!showEditMode){
                toggleEditMode(!showEditMode)

            }
        }}
        >Edit Mode</Button>


        
<Button onClick={()=>{
    updatePublished(updateObject, id)
}}>Update</Button>
        {(draft)?
            <Container>
            {(showEditMode)
                ?
                <Container>
                 <Form.Group>
                <Form.Label>Title</Form.Label>
                
                <Form.Control  placeholder={updateObject.title} type='text'
                onChange={(e)=>{
                    setNewTitle(e.target.value)
                }}
                />
                </Form.Group>
               
                <Form.Group>
            <Form.Label>SubTitle</Form.Label>
            
            <Form.Control  placeholder={updateObject.subtitle} type='text'
            onChange={(e)=>{
                setNewSubtitle(e.target.value)
            }}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label>Categories</Form.Label>
            
            <Form.Control value={updateObject.category} placeholder={updateObject.category} type='text'/>
            </Form.Group>       <Form.Group>
           
            <Form.Label>Tags</Form.Label>
            
            <Form.Control value={updateObject.tags} placeholder={updateObject.tags} type='text'/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Article</Form.Label>
            <ReactQuill value={updateObject.article} placeholder={updateObject.article} onChange={(e)=>{
                setNewArticle(e)
            }} />
            
            </Form.Group>
         
                </Container>
               :
               <p></p>
            }
    <Article showEditMode= {showEditMode} toggleEditMode={toggleEditMode} {...draft} />
    </Container>    
    :
    <Loading/>
        }

       
        </Container>
    )
}

export default ReadPublished
