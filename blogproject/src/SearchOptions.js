import React, {useState, useRef, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { GiCrossMark } from 'react-icons/gi'
import Row from 'react-bootstrap/Row'
import ArticleCard from './ArticleCard'

const SearchOptions = (props)=>{
    const [searchTerm, changeSearchTerm] = useState(undefined)
    const [resultsArray, setResultsArray] = useState(false)
    const [searchLocation, setSearchLocation] = useState(undefined)
    const [alertMessage, setAlertMessage] = useState(undefined)
    const [showAlert, setShowAlert] = useState(false)
    const [filterMessage, setFilterMessage] = useState(undefined)
    
    const getSearchArray = (location, currentSearchTerm)=>{
        let specialArray
        switch(location){
            case 'title':
              //  sortTimeAscending(currentArray, currentSortDirection)
              specialArray = props.array.filter((f)=>{
                if(currentSearchTerm && f.title.includes(currentSearchTerm)){
                        return  f
            
                }else{return}
            })
                    break;
                    case 'subtitle':
                        // sortTimeDescending(currentArray, currentSortDirection)
                        specialArray = props.array.filter((f)=>{
                         if(currentSearchTerm && f.subtitle.includes(currentSearchTerm)){
                                 return  f
                         }else{return}
                     })
                             break;
            case 'article':
               // sortTimeDescending(currentArray, currentSortDirection)
               specialArray = props.array.filter((f)=>{
                if(currentSearchTerm && f.article.includes(currentSearchTerm)){
                        return  f
            
                }
            })
                    break;
                    case 'category':
               // sortTimeDescending(currentArray, currentSortDirection)
               specialArray = props.array.filter((f)=>{
                
                if(currentSearchTerm &&f.category && f.category.includes(currentSearchTerm.toUpperCase())){
                        return  f
            
                }
            })
            break;
                    case 'tags':
               // sortTimeDescending(currentArray, currentSortDirection)
               specialArray = props.array.filter((f)=>{
                if(currentSearchTerm && f.tags && f.tags.includes(currentSearchTerm.toUpperCase())){
                        return  f
            
                }
            })
                    break;
        default:
        console.log('searchlocation has no value case', location)
          
        }
        
        console.log('specialArray', specialArray)
return specialArray

}

    

    const deliverSearchArray= async ()=>{
        const transformedArray = await getSearchArray(searchLocation, searchTerm)
        if(!searchLocation){
            setAlertMessage('Select a search location')
            setFilterMessage('')
            setShowAlert(true)
        }else if(!searchTerm || !searchTerm === 'undefined'){
            setAlertMessage('Type a search term')
            setFilterMessage('')
            setShowAlert(true)
            return
        }else if(!transformedArray ){
            setAlertMessage('NO RESULTS FOUND. PLEASE TRY ANOTHER TERM. ALSO CHECK FOR SPELLING AND EXTRA SPACES')
            setFilterMessage('')
            setResultsArray([])
            setShowAlert(true)
            return
        }else if(!transformedArray){
            setAlertMessage('array doesnt exist. try again or contact Admin')
            setFilterMessage('')
            setShowAlert(true)
            return
        }else if(transformedArray){
            setShowAlert(false)
            setAlertMessage('')
            setResultsArray(transformedArray)
            setFilterMessage(`Results for ${searchTerm.toUpperCase()} in ${searchLocation.toUpperCase()}`)
            return
        }else{
            setAlertMessage('SPECIAL CASE. unknown issue. SPECIAL CASE')
            setFilterMessage('')
            setShowAlert(true)
            return
        }
    }
    
  

    
        return(
            <Container
            style={{marginBottom:'2rem', marginTop:'1rem'}}
            >
            <h2>{alertMessage}</h2>
            <Form.Label style={{width: '50% ',textAlign: 'center', fontSize:'2rem', marginTop: '0px'}}>
            {(searchLocation === undefined) ? `Select Search location` :``}  
           
            </Form.Label>
            <SearchRadios setSearchLocation={setSearchLocation}/>

            <Form.Group style={{width:'100%'}}>
            
            <Nav>
           
            
            </Nav>
            

            <Row>
            <Form.Control style={{width:'60%', marginLeft: '5%', marginRight: '0px'}}
             type='text' placeholder={`Search VIA ${searchLocation} text`} onChange={(e)=>{
                changeSearchTerm(e.target.value)
            }} />
            <Button style={{width:'25%', marginLeft: '0px', marginRight: 'auto'}} 
            onClick={()=>{
                deliverSearchArray()
            }}
            >
            Search
            </Button> 
            </Row>
            </Form.Group>
            <h6 style={{textAlign:'center'}}>{filterMessage}</h6>

           <SearchResults resultsArray={resultsArray} />
</Container>
           
           
        )
    }

    const SearchRadios = (props)=>{
        const titleRef = useRef()
        const subtitleRef = useRef()
        const articleRef = useRef()
        const categoryRef = useRef()
        const tagsRef = useRef()
        
      const {setSearchLocation}=props
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


        return (
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
<h5 
htmlFor='article'>Article</h5>
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
        )
    }


    const SearchResults = (props)=>{

        useEffect(()=>{
console.log('search results props',props)
        },[props])
        return props.resultsArray && (
            <div style={{width:'90%', marginLeft:'auto', marginRight:'auto', marginBottom:'2rem'}}>
                {props.resultsArray.map((m)=>{
                    return(
                        <ArticleCard key={props.resultsArray.indexOf(m)} articleFrom={'homepage'} type={'published'} {...m}/>
                    )
                })}
            </div>
        )
    }
export default SearchOptions
