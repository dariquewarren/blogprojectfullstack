import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
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
const [searchLocation, setSearchLocation] = useState('title')

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


const handleSearch = (array, searchType)=>{

// take in variable for type of searching ie by tags, by title, by article
    
//take in a keyword
    
// return a filtered base array by keyword

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


const categoryMap =(array)=>{
    const newCategoryArray =[]

const categories = array.map((m)=>{
    if(m.category){
        let i= 0
for(i; m.category.length > i; i++){
    var categoryItem = m.category[i].split(' ').join('')
    newCategoryArray.push(categoryItem)
}
return 
    }else{
        return
    }
})

const finalCategoryArray = Array.from(new Set(newCategoryArray))
console.log('finalCategoryArray',finalCategoryArray)
console.log('newCategoryArray',newCategoryArray)
setCategoryArray(finalCategoryArray)
return finalCategoryArray
}
const tagsMap =(array)=>{
    const newTagsArray =[]

 array.map((m)=>{
    if(m.tags){
        let i= 0
for(i; m.tags.length > i; i++){
    var tagsItem = m.tags[i].split(' ').join('')
    newTagsArray.push(tagsItem)
}
return 
    }else{
        return
    }
})

const finalTagsArray = Array.from(new Set(newTagsArray))
console.log('finalTagsArray',finalTagsArray)
console.log('newTagsArray',newTagsArray)
setTagsArray(finalTagsArray)
return finalTagsArray
}

useEffect(()=>{
if(mappedArray.length < 1 || !mappedArray){
    fetch('/published/all').then((response)=>{
        return response.json()
       }).then((data)=>{
           if(!data.realData || data.realData[0] === undefined ){
           return  data.realData  
           }else{
               setMappedArray(data.realData)
               setBaseArray(data.realData)


            return data.realData

           }
   
    }).then((data)=>{
        console.log(data)
        categoryMap(data)
        tagsMap(data)

    })
    
}else {
    return
}
}, [mappedArray])

    return (
        <div>
        <Nav variant='tabs' style={{outline: '2px dashed red'}} >
        <Nav.Item>
        <Nav.Link 
        
        onClick={()=>{
            handleCategoryFilter('opinion')
           }}>test </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link style={{textDecoration: (categorySelected === 'HOME')?'underline':'none', maxWidth:'100%', backgroundColor: 'black'}}                  
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
            return(    
                <Nav.Item 
                key={m.id}
                value={m}
                style={{textDecoration: (categorySelected === m)?'underline':'none', maxWidth:'100%', backgroundColor: 'black'}}                  

                onClick={()=>{
                    handleCategoryFilter(m)
                    setCategorySelected(m)
                                       console.log(m)
                                 }}
                >
                
                
                        <Nav.Link
                        style={{ maxWidth:'100%'}}                  
                        >{m}</Nav.Link>
                        </Nav.Item>
            )
            
        })
    
    
        :
    <p></p>}

    <Nav.Item>
        <Nav.Link
        onClick={()=>{
            toggleSearch(!showSearch)
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
     <input ref={titleRef} type='radio' id='title' value='title' onClick={(e)=>{
        handleRadios(e.target.value)

        
     }}/>
   <label HTMLfor='subtitle'>title</label>
   
   <input ref={subtitleRef} type='radio' id='subtitle' value='subtitle' onClick={(e)=>{
    handleRadios(e.target.value)


    
 }}/>
<label HTMLfor='subtitle'>subtitle</label>
<input ref={articleRef} type='radio' id='article' value='article' onClick={(e)=>{
    handleRadios(e.target.value)


    
 }}/>
<label HTMLfor='article'>article</label>
<input ref={categoryRef} type='radio' id='category' value='category' onClick={(e)=>{
    handleRadios(e.target.value)


    
 }}/>
<label HTMLfor='category'>category</label>
<input ref={tagsRef} type='radio' id='tags' value='tags' onClick={(e)=>{
    handleRadios(e.target.value)


    
 }}/>
<label HTMLfor='tags'>tags</label>
      </div>
        :
     <p></p>   
        }
     <h1 style={{marginLeft:'auto',marginRight:'auto', width: '50%'}}>{categorySelected}</h1>

        <div style={{display: 'flex', flexDirection:'row',outline: '1px solid green', width: '100%' }}>
      
     
       
       <Nav className='flex-column' style={{border:'2px solid black', width: '80%', marginLeft: '.5rem', marginRight:'.5rem'}}>
     
       

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


       
       </div>
       <Nav  style={{border:'2px solid black', width:'100%', marginLeft: '.5rem'}}>
     
     
       
       
     
      <h2>TAGS</h2>
      
      
      
      
      {(tagsArray.length > 0)
        ?
        tagsArray.map((m)=>{
            return(    
                        <button 
                        key={m.id}
                        style={{width:'auto', height:'50px', borderRadius:'50%', backgroundColor: 'whitesmoke'}} key={tagsArray.indexOf(m)} onClick={()=>{
                            handleTagsFilter(m)
                            console.log(m)
                        }}>{m}</button>
            )
            
        })
    :
    <p></p>}
       </Nav>
   </div>
    )
}

export default Homepage
