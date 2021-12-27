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
const [mappedArray, setMappedArray] = useState([])
const [categoryArray, setCategoryArray] = useState([])
const [tagsArray, setTagsArray] = useState([])
 
const categoryMap =(array)=>{
    const newCategoryArray =[]

const categories = array.map((m)=>{
    if(m.category){
        let i= 0
for(i; m.category.length > i; i++){
    
    newCategoryArray.push(m.category[i])
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
    
    newTagsArray.push(m.tags[i])
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
       <Container responsive style={{display:'flex', flexDirection: 'row'}}>
       <button onClick={()=>{
        categoryMap(mappedArray)
       }}>test button</button>
       <Nav className='flex-column ' style={{border:'2px solid black', width:'20vw', marginLeft: '2vw'}}>
       {(categoryArray.length > 0)
        ?
        tagsArray.map((m)=>{
            return(    
                        <button key={tagsArray.indexOf(m)} onClick={()=>{
                            console.log(m)
                        }}>{m}</button>
            )
            
        })
    :
    <p></p>}
       </Nav>
       <Nav className='flex-column' style={{border:'2px solid black', width: '75vw'}}>
     
   
       

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
       </Container>
    )
}

export default Homepage
