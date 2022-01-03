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
const [showAlert, setShowAlert] = useState(false)
const [alertMessage, setAlertMessage] = useState('')
const [filterMessage, setFilterMessage] = useState('')
const [radioSelected, toggleRadioSelected] = useState(false)
const [tagsArray, setTagsArray] = useState([])

const radioRef = useRef()
const titleRef = useRef()
const subtitleRef = useRef()
const body = useRef()

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
    <SearchOptions array={mappedArray} setNewArray={setMappedArray} 
    setFilterMessage={setFilterMessage} searchLocation={'title'}
    setShowAlert={setShowAlert} setAlertMessage={setAlertMessage}
     />
     <input ref={radioRef} type='radio' id='title' value='title' onClick={(e)=>{
         toggleRadioSelected(!radioSelected)
         radioRef.current.checked = radioSelected
        
         console.log('title', radioRef.current.checked)
     }}/>
   <label for='title'>title</label>
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
