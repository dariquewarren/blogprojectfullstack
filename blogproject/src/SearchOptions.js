import React, {useState, useRef} from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import { GiCrossMark } from 'react-icons/gi'
import Row from 'react-bootstrap/Row'

const SearchOptions = (props)=>{
    const [searchTerm, changeSearchTerm] = useState(undefined)
    
    const getSearchArray = (location, currentSearchTerm)=>{
        let specialArray
        switch(location){
            case 'title':
              //  sortTimeAscending(currentArray, currentSortDirection)
              specialArray = props.array.filter((f)=>{
                if(currentSearchTerm && f.title.includes(currentSearchTerm)){
                        return  f
            
                }
            })
                    break;
                    case 'subtitle':
                        // sortTimeDescending(currentArray, currentSortDirection)
                        specialArray = props.array.filter((f)=>{
                         if(currentSearchTerm && f.subtitle.includes(currentSearchTerm)){
                                 return  f
                     
                         }
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
        
return specialArray

}

    

    const deliverSearchArray= async ()=>{
        const transformedArray = await getSearchArray(props.searchLocation, searchTerm)
        if(!searchTerm || !searchTerm === 'undefined' ){
            props.setAlertMessage('Please type something')
            props.setShowAlert(true)
            return
        }else if(transformedArray.length <  1 ){
            props.setAlertMessage('NO RESULTS FOUND. PLEASE TRY ANOTHER TERM. ALSO CHECK FOR SPELLING AND EXTRA SPACES')
            props.setShowAlert(true)
            return
        }else if(!transformedArray){
            props.setAlertMessage('array doesnt exist. try again or contact Admin')
            props.setShowAlert(true)
            return
        }else if(transformedArray){
            props.setShowAlert(false)
            props.setNewArray(transformedArray)
            props.setFilterMessage(`Showing every ${props.searchLocation.toUpperCase()} that includes the term(s) ${searchTerm}`)
            return
        }else{
            props.setAlertMessage('SPECIAL CASE. unknown issue. SPECIAL CASE')
            props.setShowAlert(true)
            return
        }
    }
    
  

    
        return(
            <Form.Group style={{width:'100%'}}>
            
            <Nav>
            <Form.Label style={{width: '50% ',textAlign: 'center', fontSize:'2rem', marginTop: '0px'}}>
            {(props.searchLocation === undefined) ? `Select Search location` :`Search ${props.searchLocation.toUpperCase()}`}  
           
            </Form.Label>
            <h6 style={{width:'50%', textAlign: 'right', paddingRight:'1%', marginBottom:'0px'}}>
            <GiCrossMark style={{cursor:'pointer', color:'red',  height: '2rem', width:'2rem'}} onClick={()=>{
                props.toggleSearch(false)
            }}/>
            </h6>
            </Nav>
            
            <h6 style={{textAlign:'center'}}>{props.filterMessage}</h6>

            <Row>
            <Form.Control style={{width:'60%', marginLeft: '5%', marginRight: '0px'}}
             type='text' placeholder={`Search VIA ${props.searchLocation} text`} onChange={(e)=>{
                changeSearchTerm(e.target.value)
            }} />
            <Button style={{width:'25%', marginLeft: '0px', marginRight: 'auto'}} 
            onClick={()=>{
                deliverSearchArray()
                props.setCategorySelected(` Search Results For - "${searchTerm}"} `)
            }}
            >
            Search
            </Button> 
            </Row>
            <SearchRadios setSearchLocation={props.setSearchLocation}/>
            </Form.Group>

           
           
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

export default SearchOptions
