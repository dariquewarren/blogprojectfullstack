import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.svg';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ArticleCard from './ArticleCard'
import Loading from './Loading'
import SearchOptions from './SearchOptions'
import AlertText from './AlertText'
const Homepage =  (props)=> {
const [baseArray, setBaseArray] = useState([])
const [mappedArray, setMappedArray] = useState([])
const [categoryArray, setCategoryArray] = useState([])
const [categorySelected, setCategorySelected] = useState(false)
const [showSearch, toggleSearch] = useState(false)
const [searchLocation, setSearchLocation] = useState(undefined)

const [showAlert, setShowAlert] = useState(false)
const [alertMessage, setAlertMessage] = useState('')
const [filterMessage, setFilterMessage] = useState('')
const [tagsArray, setTagsArray] = useState([])

const titleRef = useRef()
const subtitleRef = useRef()
const articleRef = useRef()
const categoryRef = useRef()
const tagsRef = useRef()



const handleRadios = (type)=>{
switch(type){
    case 'title':
        setSearchLocation('title')
        titleRef.current.checked = true
        articleRef.current.checked = false
        subtitleRef.current.checked = false
        categoryRef.current.checked = false
        tagsRef.current.checked = false
        console.log(type, titleRef.current.checked)
        break;
        case 'subtitle':
            setSearchLocation('subtitle')
            subtitleRef.current.checked = true
            titleRef.current.checked = false
            articleRef.current.checked = false
            categoryRef.current.checked = false
            tagsRef.current.checked = false
            console.log(type, subtitleRef.current.checked)
            break;
            case 'article':
        setSearchLocation('article')
        articleRef.current.checked = true
        titleRef.current.checked = false
        subtitleRef.current.checked = false
        categoryRef.current.checked = false
        tagsRef.current.checked = false
        console.log(type,articleRef.current.checked)
        break;
        case 'tags':
            setSearchLocation('tags')
            tagsRef.current.checked = true
            titleRef.current.checked = false
            articleRef.current.checked = false
            subtitleRef.current.checked = false
            categoryRef.current.checked = false
            console.log(type, tagsRef.current.checked)
            break;
            case 'category':
            setSearchLocation('category')
            categoryRef.current.checked = true
            titleRef.current.checked = false
            articleRef.current.checked = false
            subtitleRef.current.checked = false
            tagsRef.current.checked = false
            console.log(type, categoryRef.current.checked)
            break;
default: 
console.log('default')
}
}


const displayAmount = (type,arr, term)=>{
var newArray
switch(type){
    case 'tags':
        
        newArray = arr.filter((f)=>{
            return f.tags.includes(term)
        });
        break;
    case 'category':
       newArray = arr.filter((f)=>{
            return f.category.includes(term)
        });
             break;

    default:
        console.log('type undefined')
}





return newArray.length
}


const handleCategoryFilter = (filterWord)=>{
    const interimArray = baseArray

// filter array by matches to filterWord
var trueCategoryArray = []

interimArray.map((m)=>{
    if(m.category.includes(filterWord.toUpperCase())){
        trueCategoryArray.push(m)
return m
    }else{
        return
    }
})

console.log('trueCategoryArray', trueCategoryArray)


    // set main page array to new Category array
    setMappedArray(trueCategoryArray)
    // console.log('category filter')
    }
const handleTagsFilter = (filterWord)=>{
// filter array by matches to filterWord
const interimArray = baseArray
var trueTagsArray = []

interimArray.map((m)=>{
    if(m.tags.includes(filterWord.toUpperCase())){
        trueTagsArray.push(m)
return m
    }else{
        return
    }
})
setMappedArray(trueTagsArray)
console.log('trueTagsArray', trueTagsArray)


    // set main page array to new filtered array
    // console.log('category filter')
    
    
}


const categoryMap = async(array)=>{
  
const changedArray = array.map((m)=>{
    return m.category
})
const flatArray = await changedArray.flat()
const setArray = [...new Set(flatArray)]
console.log(`flatArray`, flatArray)
console.log(`setArray`, setArray)
console.log(`changedArray`, changedArray)

setCategoryArray(setArray)
}


const tagsMap =async (array)=>{
    const changedArray = await array.map((m)=>{
        return m.tags
    })
    const flatArray = await changedArray.flat()
    const setArray = await [...new Set(flatArray)]
    console.log(`flatArray`, flatArray)
    console.log(`setArray`, setArray)
    console.log(`changedArray`, changedArray)
setTagsArray(setArray)
}

useEffect(()=>{
    console.log('trueArray',props.trueArray)
if(mappedArray.length < 1 || !mappedArray){
    setMappedArray(props.publishedArray)
    setBaseArray(props.trueArray)
    categoryMap(props.trueArray)
    tagsMap(props.trueArray)
    
    
}else {
    return
}
}, [props.trueArray, props.publishedArray])

    return (
        <div>
        <Nav variant='tabs' style={{borderBottom: '2px solid black'}} >
       
        <Nav.Item>
        <Nav.Link
         style={{textDecoration: (categorySelected === 'HOME')?'underline':'none', maxWidth:'100%', backgroundColor: 'black'}}                  
        onClick={()=>{
            setMappedArray(baseArray)
            setCategorySelected('HOME')
           }}>
           Home
           </Nav.Link>
        </Nav.Item>
        {(categoryArray.length > 0)
            ?
            categoryArray.map((m)=>{
                return (    
                    <Nav.Item                    
                    key={m.id} >
                   <Nav.Link 
                   style={{textDecoration: (categorySelected === m.toUpperCase())?'underline':'none', maxWidth:'100%', backgroundColor: 'black'}}                  
                   
                   key={tagsArray.indexOf(m)} onClick={()=>{
                       handleCategoryFilter(m)
                       setCategorySelected(m.toUpperCase())
                       console.log(m)
                   }}>{m} </Nav.Link>
                   </Nav.Item>
                )
                
            })
        :
        <p></p>}
    <Nav.Item>
        <Nav.Link
        style={{textDecoration: (categorySelected === 'HOME')?'underline':'none', maxWidth:'100%', backgroundColor: 'black'}}                  

        onClick={()=>{
            toggleSearch(!showSearch)
            setSearchLocation(undefined)
            setFilterMessage('')
            console.log('search clicked')

        }}
        >
        {(showSearch) ? 'Hide Search' : 'Show Search'}
        </Nav.Link>
    </Nav.Item>
     </Nav>

     {(showSearch)
        ?
    <div>
    <AlertText showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />
    <h6>{filterMessage}</h6>
    <SearchOptions array={baseArray} setNewArray={setMappedArray} 
    setFilterMessage={setFilterMessage} searchLocation={searchLocation}
    setShowAlert={setShowAlert} setAlertMessage={setAlertMessage}
     />
     <Nav 
     variant='tabs'
      style={{width: '90%', marginLeft:'auto', marginRight:'auto' }}
       >
     

     <Nav.Item 
     style={{cursor: 'pointer',width:'auto', marginLeft: '1%', marginRight: '1%'}}
     onClick={(e)=>{
        handleRadios(e.target.value)    
     }}
     >
    
     <Form.Check ref={titleRef} type='radio' id='title' value='title'/>
     
     <h5
     htmlFor='title'>Title</h5>
     
     
     </Nav.Item>
   <Nav.Item
   style={{cursor: 'pointer',width:'auto', marginLeft: '1%', marginRight: '1%'}}   
   onClick={(e)=>{
    handleRadios(e.target.value)    
 }}
   >
 
   <Form.Check
   
   ref={subtitleRef} type='radio' id='subtitle' value='subtitle' />
 <h5

 htmlFor='subtitle'>SubTitle</h5> 
   </Nav.Item>
   
   
<Nav.Item 
style={{cursor: 'pointer',width:'auto', marginLeft: '1%', marginRight: '1%'}}   
onClick={(e)=>{
    handleRadios(e.target.value)    
 }}
>

<Form.Check ref={articleRef} type='radio' id='article' value='article' />
<h4 
htmlFor='article'>Article</h4>
</Nav.Item>


<Nav.Item
style={{ cursor: 'pointer',width:'auto', marginLeft: '1%', marginRight: '1%'}}  
onClick={(e)=>{
    handleRadios(e.target.value)    
 }}
>

<Form.Check ref={categoryRef} type='radio' id='category' value='category' />
<h5
 htmlFor='category'>Category</h5>
</Nav.Item>


 <Nav.Item 
 style={{cursor: 'pointer', width:'auto', marginLeft: '1%', marginRight: '1%'}} 
 onClick={(e)=>{
    handleRadios(e.target.value)    
 }}
 >
 
 <Form.Check ref={tagsRef} type='radio' id='tags' value='tags'/>
<h5
htmlFor='tags'>Tags</h5>
</Nav.Item>

     </Nav>
      </div>
        :
     <p></p>   
        }
     

        <div style={{display: 'flex', flexDirection:'row', width: '100%' }}>
      
        <Nav className='flex-column' style={{marginLeft: 'auto',marginRight:'0px', width: '30%' }}>
    
    <img src={logo} style={{ height: '100vh', width:'100%', position:'sticky', top:'2px'}} />
        </Nav>
       <Nav className='flex-column' style={{marginLeft: 'auto',marginRight:'0px', width: '50%' }}>
     

       <h4 style={{textAlign:'center' ,borderBottom:'2px solid black', marginLeft:'auto',marginRight:'auto', width: '50%'}}>
        {(categorySelected && categorySelected !=='HOME') ? categorySelected: 'All Articles'}
        </h4>

{(mappedArray.length > 0)
    ?
mappedArray.map((m)=>{
    return (
        <ArticleCard articleFrom='homepage' key={m.id} {...m}/>
    )
})
:
<Loading/>
}



       </Nav>

       <Nav className='flex-column' style={{ width:'15%', marginLeft: 'auto', marginRight:'auto'}}>
       <h2 className='text-center' style={{textDecoration: 'underline'}}>Tags</h2>
       
     {(tagsArray.length > 0)
        ?
        tagsArray.map((m)=>{
            return(    
                        <p 
                        key={m.id}
                        
                        style={{cursor: 'pointer',width:'100%',textAlign:'right', textDecoration:'underline', color: 'black'}} key={tagsArray.indexOf(m)} onClick={()=>{
                            handleTagsFilter(m)
                            
                            console.log(m)
                        }}>{m.toUpperCase()} ({displayAmount('tags', baseArray, m)}) </p>
            )
            
        })
    :
    <p></p>}
        </Nav>
       
       </div>
      
   </div>
    )
}

export default Homepage
