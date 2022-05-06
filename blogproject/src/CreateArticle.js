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
import { saveDraft, publishArticle } from './APICalls';
import { addSingleArticle } from './Firebase';
import { getAuth} from "firebase/auth";

const auth = getAuth();


function ArticleForm(props){
    
    const ImageRef = useRef()
        
    const handleTags = async  (nextTag)=>{
    const newTags = await nextTag.replace(' ', '').toUpperCase().split(',')
    var finalTags = newTags.map((m)=>{
        return m.split(' ').join('')
    })
    props.setTags(finalTags)
    console.log('finalTags', finalTags)


    }
    const handleCategory = async (newCategory)=>{
        const newCategories = await newCategory.replace(' ', '').toUpperCase().split(',')
        var finalCategories = newCategories.map((m)=>{
            return m.split(' ').join('')
        })
    props.setCategory(finalCategories)
        console.log('category', finalCategories)
    
    
        }
     
        return (
            <div>
            <Container
            style={{marginBottom:'1rem', position:'sticky', top:'1px'}}
            >
            <Button 
            className='bg-primary' 
            style={{width:'auto', marginLeft: 'auto', marginRight: 'auto'}}
            onClick={(e)=>{
              e.preventDefault() 
              console.log('new article', props.newArticle)
  
              props.toggleArticlePreview(!props.articlePreview)
          }} >Preview</Button>
  
            <Button 
            className='bg-success w-33'
            style={{width:'auto', marginLeft: 'auto', marginRight: 'auto'}}
            onClick={ async ()=>{
                switch(props.newArticle.author){
                    case 'ANONYMOUS':
                        console.log('first case', props.newArticle.author);
                        alert('Sample Version!: Click PREVIEW to view article sample. Please login to save draft or publish')
                        break;
                    default:
                        try{
                            addSingleArticle('drafts', props.newArticle.author, {type:'drafts', ...props.newArticle})
                          alert(`draft saved for ${props.newArticle.author}`)
                        }catch(e){
                            console.log('error', e.m)
                        };
                }

                
          }}
   >
            Save Draft
            </Button>
  
            <Button 
            className='bg-warning'
            style={{width:'auto', marginLeft: 'auto', marginRight: 'auto'}}
            onClick={ async ()=>{
              try{
                addSingleArticle('published', props.newArticle.author, {type:'published', ...props.newArticle})
                alert(`article published  for ${props.newArticle.author}`)
              }catch(e){
                  console.log('error', e)
              }
        }}
             >
            Publish Article
            </Button>
            </Container>
  
          
            <Form.Label className='w-100 text-center' style={{fontWeight:'bold'}} >Create Article</Form.Label>
           
            <img 
            src={props.image} 
            alt={props.title}
            style={{height: '15rem', width: '15rem',display:'block', marginLeft: 'auto', marginRight: 'auto'}}
            />

         

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
          type='text' placeholder="Image URL" required onChange={(e)=>{
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
    className='w-50' ref={ImageRef} required onChange={(e)=>{
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

          type='text' placeholder="Title" value={props.title} required onChange={(e)=>{
              props.setTitle(e.target.value)
          }}/>
          </Form.Group>
    
          <Form.Group 
          as={Col}>
          <Form.Label className='w-100 text-center'>Sub-Title</Form.Label>
          <Form.Control
          type='text' placeholder="Sub Title" required onChange={(e)=>{
              props.setSubtitle(e.target.value)
          }}/>
          </Form.Group>
    
          </Row>
        
          
   
            <br/>
            <Form.Label className='w-100 text-center'> Quill Editor</Form.Label>
    <ReactQuill 
    style={{minHeight: '20rem', border: '2px solid black', marginTop:'2rem', marginBottom: '2rem'}} 
    theme="snow" 
    value={props.article}
    onChange={(e)=>{
                        props.setArticle(e)
                    }} />
                    


                    <Form.Group
                    className='mb-2'
    ><Form.Label> Category </Form.Label>
            
     <Form.Control type='text' required placeholder="Separate by comma" 
      onChange={(e)=>{
        e.preventDefault()
        handleCategory(e.target.value)

     }}/>
            
             
                       </Form.Group>
      
                       
          <Form.Group
          className='mb-2'
          >
          <Form.Label>Tags</Form.Label>
          
          <Form.Control type='text' required placeholder="Separate by comma"
          onChange={(e)=>{
              e.preventDefault()
              handleTags(e.target.value)
          }}
          /> 
          
                    </Form.Group>
 
          </Form>


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
        const [articlePreview, toggleArticlePreview] = useState(false)

    const publishedTime = Dayjs().format('hh:mm:ss A')

    const referencePublishedTime = Dayjs().format('hhmmss')

    const regex = /\W/gi
    const transformTime = ()=>{
       

        if(publishedTime.includes('A') && publishedTime[0] ==='1' && publishedTime[1] === '2'){
          const militaryMidnight = referencePublishedTime.replace('12', '00')
return Number(militaryMidnight) 
        }else if(publishedTime.includes('P') && publishedTime[0] !=='1'  ){
          const militaryAfternoon = Number(referencePublishedTime) + 120000
          return militaryAfternoon
           
        }else if(publishedTime.includes('A') && publishedTime[0] ==='0'){
            const militaryMorning = Number(referencePublishedTime) 
return militaryMorning
        }else{
            return Number(referencePublishedTime)
        }
    }
    const newArticle = {
        category,
         tags,  
        title,
        subtitle,
        article,
        image,
        author: props.articleAuthor,
        datePublished: Dayjs().format('M/DD/YYYY'),
        timePublished: Dayjs().format('hh:mm A'),
        sortableTime: transformTime(),
        sortableDate: Dayjs().valueOf() 
    }


    

   

    
    if(articlePreview){
return(
    <Container>

    <Button
    style={{position: 'sticky', top: '10px'}}
    onClick={()=>{
        toggleArticlePreview(false)
    }}
    > Close Preview</Button>

    <Button 
    className='bg-success w-33'
    style={{position:'sticky',top:'10px', width:'auto', marginLeft: 'auto', marginRight: 'auto'}}
    onClick={ async ()=>{
        try{
            addSingleArticle('drafts', props.newArticle.author, {type:'drafts' , ...props.newArticle})
            alert(`draft saved for ${props.newArticle.author}`)
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
    onClick={ async ()=>{
      try{
        addSingleArticle('published', props.newArticle.author, {type:'published', ...props.newArticle})
        alert(`article published for ${props.newArticle.author}`)

      }catch(e){
          console.log('error', e)
      }
      console.log('published')
}}
     >
    Publish Article
    </Button>
 
    <Article {...newArticle} />
    </Container>
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
    tags={tags} setTags={setTags}
    category={category} setCategory={setCategory}
    />
)

    }
}

export default CreateArticle
