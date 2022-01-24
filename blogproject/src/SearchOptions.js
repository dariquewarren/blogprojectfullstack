import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'

import Row from 'react-bootstrap/Row'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

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
            <Form.Label style={{width: '100% ',textAlign: 'center', fontSize:'2rem'}}>
            {(props.searchLocation === undefined) ? `Select Search location` :`Search ${props.searchLocation.toUpperCase()}`}  
            </Form.Label>
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
            </Form.Group>

           
           
        )
    }

export default SearchOptions
