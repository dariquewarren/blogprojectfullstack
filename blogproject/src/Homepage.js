import React, {useState, useEffect, useRef} from 'react'
import portfolioPic from './portfolioPic.jpg'
import {BiRefresh} from 'react-icons/bi'
import {getAllPublished} from './APICalls'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import ArticleCard from './ArticleCard'
import Loading from './Loading'
import SearchOptions from './SearchOptions'
import AlertText from './AlertText'
const Homepage =  (props)=> {
const [baseArray, setBaseArray] = useState([])
const [mappedArray, setMappedArray] = useState([])

const [showAlert, setShowAlert] = useState(false)
const [alertMessage, setAlertMessage] = useState('')

const [tagsArray, setTagsArray] = useState([])




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



const handleTagsFilter = (filterWord)=>{
// filter array by matches to filterWord
const interimArray = baseArray
var trueTagsArray = []


if(filterWord){
    interimArray.map((m)=>{
        if(m.tags.includes(filterWord.toUpperCase())){
          return  trueTagsArray.push(m)
        }else{
            return m
        }
    })
    setMappedArray(trueTagsArray)
    props.setCategorySelected(`Viewing Tag: ${filterWord}`)
    console.log('trueTagsArray', trueTagsArray)
}else{
    props.setCategorySelected(`ALL`)

   return setMappedArray(baseArray)

}
    
}



const handleCategoryFilter = (filterWord)=>{
    // grab base arrayy

    // props.trueArray
    const interimArray = props.trueArray

// filter array by matches to filterWord
var trueCategoryArray = []

interimArray.map((m)=>{
    if(m.category.includes(filterWord.toUpperCase())){
return trueCategoryArray.push(m)
 
    }else{
        return m
    }
})



    // set main page array to new Category array
    // props.setPublishedArray
    setMappedArray(trueCategoryArray)
    props.setCategorySelected(`Viewing Category: ${filterWord}`)

    console.log('trueCategoryArray', trueCategoryArray)

    // console.log('category filter')
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
const getPublished = getAllPublished()
useEffect(()=>{
if(mappedArray.length < 1 || !mappedArray){
    setMappedArray(props.publishedArray)
    setBaseArray(props.trueArray)
    tagsMap(props.trueArray)
    console.log('categories',props.categoryArray)

}else {
    console.log('categories',props.categoryArray)
    console.log('mapped Array',props.categoryArray)

    return
}
}, [props.trueArray, props.publishedArray, mappedArray])

    return (
        <div>
       
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

{(props.publishedArray.length > 0)
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

       <Nav className='flex-column' style={{ width:'25%', marginLeft: 'auto', marginRight:'auto'}}>
       <h2 className='text-center' style={{textDecoration: 'underline'}}>Tags</h2>
     
    <h2 className='text-center' style={{textDecoration: 'underline'}}>Categories</h2>
   
        </Nav>
    
       </div>
      
   </div>
    )
}

export default Homepage
