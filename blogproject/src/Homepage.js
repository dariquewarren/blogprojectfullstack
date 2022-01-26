import React, {useState, useEffect, useRef} from 'react'
import portfolioPic from './portfolioPic.jpg'
import Nav from 'react-bootstrap/Nav'
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
return trueCategoryArray.push(m)
 
    }else{
        return m
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
      return  trueTagsArray.push(m)
    }else{
        return m
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
}, [props.trueArray, props.publishedArray, mappedArray])

    return (
        <div>
        <Nav variant='tabs' style={{borderBottom: '2px solid black', backgroundColor:'grey'}} >
       
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
                return categoryArray.indexOf(m) < categoryArray.length / 2 && (    
                    <Nav.Item                    
                    key={m.id} >
                   <Nav.Link 
                   style={{textDecoration: (categorySelected === m.toUpperCase())?'underline':'none',width:'auto', backgroundColor: 'black'}}                  
                   
                   key={tagsArray.indexOf(m)} onClick={()=>{
                       handleCategoryFilter(m)
                       setCategorySelected(m.toUpperCase())
                       setFilterMessage('')
                       toggleSearch(false)
                       console.log(m)
                   }}>{m} </Nav.Link>
                   </Nav.Item>
                )
                
            })
        :
        <p></p>}
        <br></br>
        {(categoryArray.length > 0)
            ?
            categoryArray.map((m)=>{
                return categoryArray.indexOf(m) > categoryArray.length / 2 && (    
                    <Nav.Item                    
                    key={m.id} >
                   <Nav.Link 
                   style={{textDecoration: (categorySelected === m.toUpperCase())?'underline':'none',width:'auto', backgroundColor: 'black'}}                  
                   
                   key={tagsArray.indexOf(m)} onClick={()=>{
                       handleCategoryFilter(m)
                       setCategorySelected(m.toUpperCase())
                       setFilterMessage('')
                       toggleSearch(false)
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
    <div style={{marginBottom: '4rem', borderBottom: '5px solid black'}} >
    <AlertText showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />

    <SearchOptions array={baseArray}  setNewArray={setMappedArray} 
    filterMessage={filterMessage} setFilterMessage={setFilterMessage} setSearchLocation={setSearchLocation} searchLocation={searchLocation}
    setCategorySelected={setCategorySelected} toggleSearch={toggleSearch}
    setShowAlert={setShowAlert} setAlertMessage={setAlertMessage}
     />

     
      </div>
        :
     <p></p>   
        }
     

        <div style={{display: 'flex', flexDirection:'row', width: '100%', marginTop:'0px' }}>
      
        <Nav className='flex-column' style={{marginLeft: 'auto',marginRight:'0px', width: '40%' }}>
    
    <img src={portfolioPic} alt='Blog owner' style={{ height: '50vh', width:'100%', position:'sticky', top:'2px'}} />
        </Nav>
       <Nav className='flex-column' style={{marginLeft: 'auto',marginRight:'0px', width: '40%' }}>
     

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
                        
                        style={{cursor: 'pointer',width:'100%',textAlign:'right', 
                        textDecoration:'underline', color: 'black'}} 
                         onClick={()=>{
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
