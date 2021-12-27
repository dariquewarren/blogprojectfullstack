import React, {useState, useEffect, useRef} from 'react'
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';// css
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function Article(props) {
const [valuesSet, changeSetValues] = useState(false)


 var {title, subtitle, tags, category, image, article} = props
 var {newTitle, newSubtitle, newTags, newCategory, newImage, newArticle} = props
 
 


const setInitalValues = ()=>{
    props.setNewTitle(props.title)
    props.setNewSubtitle(props.subtitle)
    props.setNewTags(props.tags)
    props.setNewCategory(props.category)
    props.setNewImage(props.image)
    props.setNewArticle(props.article)
    console.log(title)
    }

    useEffect(()=>{

    if(!valuesSet){
        setInitalValues()
        changeSetValues(true)
        
    } 
    console.log(valuesSet)
    return ()=>{
        changeSetValues(false)
        console.log(valuesSet)

    }
    },[])
    return (
        <article style={{marginBottom: '2rem'}}>
       
     

                    <h1 style={{textAlign:'center'}}>{(newTitle)? newTitle.toUpperCase() : title.toUpperCase()}</h1>
                    <h4 style={{textAlign:'left'}}>{(newSubtitle)?newSubtitle.toUpperCase(): subtitle.toUpperCase()}</h4>


       
       
        <Row>
        <p className='w-50' style={{textAlign:'left'}}>By {props.author}</p>
        <p className='w-50 ' style={{textAlign:'right'}}> {props.datePublished}</p>
       </Row>
       <br/>
       <Container style={{maxWidth:'60%', textAlign: 'right'}}>
    <img src={(newImage)? newImage : image } style={{height: '20rem', width:'100%', display:'block', marginBottom:'2rem', marginLeft:'auto',marginRight:'0rem'}}/>
    </Container>

    <p>{(newArticle)?ReactHtmlParser(newArticle) : ReactHtmlParser(article) } </p>




 {(props.showEditMode)
    ?
    
    <EditArticle {...props}/>
    :
<p></p>
}


        </article>
    )
}


 const EditArticle = (props)=>{
    const [showUpload, toggleUpload] = useState(false)

    const quillModules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
     
      const quillFormats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]
    const ImageRef = useRef()

    var {title, subtitle, tags, category, image, article} = props
    var {newTitle, newSubtitle, newTags, newCategory, newImage, newArticle} = props

    return(
        <Container>
        <Form.Group>
        <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' placeholder={title} value={(newTitle  )? newTitle : title} onChange={(e)=>{
            props.setNewTitle(e.target.value)
        }}/>

        </Form.Group>

        <Form.Group>
        <Form.Label>Sub-Title</Form.Label>
        

        <Form.Control type='text' placeholder={subtitle} value={(newSubtitle)?newSubtitle: subtitle} onChange={(e)=>{
            props.setNewSubtitle(e.target.value)
        }} />
        </Form.Group>    

        <Form.Group>
        <Form.Label>IMAGE</Form.Label> <br/>
        <Form.Label>{(showUpload)?'Upload Image':'Paste URL'} <Button
        onClick={()=>{
            toggleUpload(!showUpload)
            console.log('switch to url')
        }}
        >{(showUpload)?'Switch to URL': 'Switch to UPLOAD'}</Button> 
        </Form.Label>
        {(showUpload)
        ?
        <Form.Control type='file'  
        ref={ImageRef}
        onChange={(e)=>{
            if(ImageRef.current){
                let file = ImageRef.current.files[0]
                console.log('current exists', file)
                let fileReader = new FileReader(); 
          fileReader.readAsDataURL(file); 
          fileReader.onload = function() {
          console.log('filereader result',fileReader.result);
          props.setNewImage(fileReader.result)
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
        :
        <Form.Control type='text'
        placeholder='PASTE URL HERE'
         onChange={(e)=>{
            props.setNewImage(e.target.value)
        }}  />
        }
        </Form.Group>
        <Form.Group style={{maxWidth:'60%', textAlign: 'right'}}>
        <img src={(newImage)? newImage : image } style={{height: '20rem', width:'100%', display:'block', marginBottom:'2rem', marginLeft:'auto',marginRight:'0rem'}}/>
        </Form.Group>

        <Form.Group>
        <ReactQuill 
        theme='snow' 
        modules={quillModules}
        formats={quillFormats}
        placeholder={props.article} 
        value={(newArticle) ? newArticle: article} 
        onChange={(e)=>{
            props.setNewArticle(e)
            console.log(e)
        }} /> 
        </Form.Group>
        <Form.Group>
        <Form.Label>Tags</Form.Label>
        <Form.Control type='text' placeholder={tags} value={(newTags)?newTags: tags} 
        onChange={(e)=>{
            props.setNewTags(e.target.value)
            console.log(props.newTags)
        }}/>
        <Form.Label>Category</Form.Label>
        <Form.Control type='text' 
        placeholder={category} value={(newCategory)?newCategory: category} 
        onChange={(e)=>{
            props.setNewCategory(e.target.value)
            console.log(props.newCategory)
        }}/>
        </Form.Group>

        </Form.Group>
        </Container>
    )
 }
export default Article
