import React, {useState, useEffect} from 'react'
import {BiRefresh} from 'react-icons/bi'
import Nav from 'react-bootstrap/Nav'
import ArticleCard from './ArticleCard'
import Loading from './Loading'
import {getEveryArticle} from './Firebase'
const Homepage =  (props)=> {
const [baseArray, setBaseArray] = useState([])
const [mappedArray, setMappedArray] = useState([])

const [tagsArray, setTagsArray] = useState([])


const handleTagsFilter = (filterWord)=>{
    console.log('filterWord', filterWord)

   // TAKE IN WORD
   // FILTER OUT UNDEFINED VALUES FOR TAGS
   const mappedTagsArray =[]
    props.trueArray.map((m)=>{
    if(m.tags !== undefined && m.tags.includes(filterWord.toUpperCase()) ){
        mappedTagsArray.push(m)
        return m
    }
    })
       // FILTER OR MAP ARRAY BY TAGS TO FIND ARTICLES WHERE TAGS=== MAP

       mappedTagsArray.map((m)=>{
        return m.tags.includes(filterWord.toUpperCase())
    })
// SET MAIN ARRAY TO MAPPEDTAGS ARRAY
if(mappedTagsArray.length > 0){
    setMappedArray(mappedTagsArray)
    return
}else{
    alert('error: no array: error')
}
    console.log('mappedTagsArray', mappedTagsArray)
    
}



const handleCategoryFilter = (filterWord)=>{
    console.log('filterWord', filterWord)

   // TAKE IN WORD
   // FILTER OUT UNDEFINED VALUES FOR CATEGORY
   const mappedCategoryArray =[]
    props.trueArray.map((m)=>{
    if(m.category !== undefined && m.category.includes(filterWord)){
        mappedCategoryArray.push(m)
        return m
    }
    })
       // FILTER OR MAP ARRAY BY CATEGORY TO FIND ARTICLES WHERE CATEGORY=== MAP

    mappedCategoryArray.map((m)=>{
        return m.category.includes(filterWord.toUpperCase())
    })
// SET MAIN ARRAY TO MAPPEDCATEGORY ARRAY
if(mappedCategoryArray.length > 0){
    setMappedArray(mappedCategoryArray)
    return
}else{
    alert('error: no array: error')
}
    console.log('mappedCategoryArray', mappedCategoryArray)
    }

const tagsMap =async (array)=>{
    const changedArray = await array.map((m)=>{
        return m.tags
    })
    const flatArray = await changedArray.flat()
    const setArray =  [...new Set(flatArray)]
    console.log(`flatArray`, flatArray)
    console.log(`setArray`, setArray)
    console.log(`changedArray`, changedArray)
setTagsArray(setArray)
}
useEffect(()=>{
if(mappedArray.length < 1 || !mappedArray){
    setMappedArray(props.publishedArray)
    setBaseArray(props.trueArray)
    tagsMap(props.publishedArray)

    console.log('categories',props.categoryArray)

}else {
   console.log('mapped array', mappedArray)

    return
}

}, [props.trueArray,props.categoryArray, props.publishedArray, mappedArray])

    return (
        <div>
        <button
        onClick={()=>{
            getEveryArticle()}}
        >test</button>
        <div style={{display: 'flex', flexDirection:'row', width: '100%', marginTop:'0px' }}>
      
        
       <Nav className='flex-column' style={{marginLeft: 'auto',marginRight:'0px', width: '60%' }}>
       <h4
       >
       <BiRefresh 
       style={{height:'3rem',width:'3rem', cursor: 'pointer'}}
       onClick={()=>{
           setMappedArray(baseArray)
       }}/>
       </h4>

       <h4 
       style={{textAlign:'center' ,borderBottom:'2px solid black',marginBottom:'2rem', marginLeft:'auto',marginRight:'auto', width: '50%'}}>
        {(props.categorySelected && props.categorySelected !=='HOME') ? props.categorySelected : 'All Articles'}
      
        </h4>

{
    mappedArray.map((m)=>{
    return (
        <ArticleCard articleFrom='homepage' key={m.id} {...m}/>
    )
})

}



       </Nav>

       <Nav className='flex-column' style={{ width:'25%', marginLeft: 'auto', marginRight:'auto'}}>
       <h2 className='text-center' style={{textDecoration: 'underline'}}>Tags</h2>
     {(tagsArray.length >0)
        ? 
        tagsArray.map((m)=>{
         return(
             <p key={m} style={{cursor:'pointer',textAlign:'right', textDecoration: 'underline'}}
             onClick={()=>{
                handleTagsFilter(m)
             }}
             >{m} </p>
         )
     })
    :
    <Loading/>
    }
    <h2 className='text-center' style={{textDecoration: 'underline'}} >Categories</h2>
    {(props.categoryArray.length > 0) ?props.categoryArray.map((m)=>{
        return(
            <p key={m} style={{cursor:'pointer',textAlign:'right', textDecoration: 'underline'}} 
            onClick={()=>{
                handleCategoryFilter(m)
             }}
            >{m}</p>
        )
    })
    :
    (
        <Loading/>
    )
}
        </Nav>
    
       </div>
      
   </div>
    )
}

export default Homepage
