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
        <div style={{height: '100vh',overflow: 'scroll', whiteSpace: 'wrap'}}>
        

{(props.articleFrom === 'homepage')
?
<Button
        style={{backgroundColor: (showEditMode)?'red':'blue' ,position:'sticky', top: 0, left: 0}}
        onClick={()=>{
            
            if(showEditMode){
                console.log('draft', draft)
                toggleEditMode(!showEditMode)
            }else if(!showEditMode){
                toggleEditMode(!showEditMode)

            }
        }}
        >Edit Mode</Button>
:
<p></p>
}
        
<Button style={{display:(showEditMode)?'inline': 'none' ,position:'sticky', top: 0, left: 0}} onClick={()=>{
    updatePublished(updateObject, id)
    setTimeout(()=>{
window.location.reload(true)
    },[3000])
}}>Update</Button>
        {(draft)?
           
    <Article 
    showEditMode= {showEditMode} toggleEditMode={toggleEditMode}
    newTitle={newTitle} setNewTitle={setNewTitle}
    newSubtitle={newSubtitle} setNewSubtitle={setNewSubtitle}
    newTags={newTags} setNewTags={setNewTags}
    newCategory={newCategory} setNewCategory={setNewCategory}
    newImage={newImage} setNewImage={setNewImage}
    newArticle={newArticle} setNewArticle={setNewArticle}
    {...draft} />
     
    :
    <Loading/>
        }

        </div>
    )
}

export default ReadPublished
