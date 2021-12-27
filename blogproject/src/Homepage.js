import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ArticleCard from './ArticleCard'
import Loading from './Loading'

const Homepage =  (props)=> {
const [baseArray, setBaseArray] = useState([])
const [mappedArray, setMappedArray] = useState([])
const [categoryArray, setCategoryArray] = useState([])
const [tagsArray, setTagsArray] = useState([])


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
        <div style={{display: 'flex', flexDirection:'row',outline: '1px solid green', width: '90vw' }}>
      
     
       <Nav className='flex-column ' style={{border:'2px solid black', width:'20%'}}>
     
     
       {(categoryArray.length > 0)
        ?

            categoryArray.map((m)=>{
            return(    
                        <button 
                        key={m.id}

                        style={{textDecoration:'underline', maxWidth:'100%'}}
                      onClick={()=>{
         handleCategoryFilter(m)
                            console.log(m)
                      }}
                        
                        >{m}</button>
            )
            
        })
    
    
        :
    <p></p>}
       <button onClick={()=>{
        handleCategoryFilter('opinion')
       }}>test </button>
       <button style={{position:'sticky', top: 0}} onClick={()=>{
        setMappedArray(baseArray)
       }}>reset</button>
      <h2>TAGS</h2>
      
      
      
      
      {(tagsArray.length > 0)
        ?
        tagsArray.map((m)=>{
            return(    
                        <button 
                        key={m.id}
                        style={{width:'100%', height:'50px', borderRadius:'50%', backgroundColor: 'whitesmoke'}} key={tagsArray.indexOf(m)} onClick={()=>{
                            handleTagsFilter(m)
                            console.log(m)
                        }}>{m}</button>
            )
            
        })
    :
    <p></p>}
       </Nav>
       <Nav className='flex-column' style={{border:'2px solid black', width: '80%', marginRight: '0rem'}}>
     
   
       

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
    )
}

export default Homepage
