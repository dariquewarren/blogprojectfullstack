import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
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
const setArray = await[...new Set(flatArray)]
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
        <Nav.Link style={{textDecoration: (categorySelected === 'HOME')?'underline':'none', maxWidth:'100%', backgroundColor: 'black'}}                  
        onClick={()=>{
            setMappedArray(baseArray)
            setCategorySelected('HOME')
           }}>
           Home
           </Nav.Link>
        </Nav.Item>
   

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
   <label htmlFor='title'>title</label>
   
   <input ref={subtitleRef} type='radio' id='subtitle' value='subtitle' onClick={(e)=>{
    handleRadios(e.target.value)


    
 }}/>
<label htmlFor='subtitle'>subtitle</label>
<input ref={articleRef} type='radio' id='article' value='article' onClick={(e)=>{
    handleRadios(e.target.value)


    
 }}/>
<label htmlFor='article'>article</label>
<input ref={categoryRef} type='radio' id='category' value='category' onClick={(e)=>{
    handleRadios(e.target.value)


    
 }}/>
<label htmlFor='category'>category</label>
<input ref={tagsRef} type='radio' id='tags' value='tags' onClick={(e)=>{
    handleRadios(e.target.value)


    
 }}/>
<label htmlFor='tags'>tags</label>
      </div>
        :
     <p></p>   
        }
     
        <h1 style={{marginLeft:'auto',marginRight:'auto', width: '50%'}}>{(categorySelected && categorySelected !=='HOME') ? `Category: ${categorySelected}`: 'All Articles'}</h1>

        <div style={{display: 'flex', flexDirection:'row', width: '100%' }}>
      
       
       <Nav className='flex-column' style={{ width: '70%' }}>
     
       


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

       <Nav className='flex-column' style={{ width:'20%', marginLeft: 'auto', marginRight:'2%'}}>
     
     
       
       
     
       <h2 className='text-center' style={{textDecoration: 'underline'}}>Categories</h2>
       
       
       
       
       {(categoryArray.length > 0)
         ?
         categoryArray.map((m)=>{
             return (    
                <p 
                key={m.id}
                
                style={{cursor: 'pointer',width:'100%',textAlign:'right', textDecoration:'underline', color: 'black', borderLeft:'2px solid green'}} key={tagsArray.indexOf(m)} onClick={()=>{
                    handleCategoryFilter(m)
                    setCategorySelected(m.toUpperCase())
                    console.log(m)
                }}>{m} {displayAmount('category', baseArray, m)}</p>
             )
             
         })
     :
     <p></p>}

     tags
     <br/>
     {(tagsArray.length > 0)
        ?
        tagsArray.map((m, index)=>{
            return(    
                        <p 
                        key={m.id}
                        
                        style={{cursor: 'pointer',width:'100%',textAlign:'right', textDecoration:'underline', color: 'black', borderLeft:'2px solid green'}} key={tagsArray.indexOf(m)} onClick={()=>{
                            handleTagsFilter(m)
                            
                            console.log(m)
                        }}>{m} {displayAmount('tags', baseArray, m)}</p>
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
