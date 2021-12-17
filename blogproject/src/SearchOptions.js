import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'

import Row from 'react-bootstrap/Row'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const SearchOptions = (props)=>{
    const [searchTerm, changeSearchTerm] = useState(undefined)
    
    const handleSearch =()=>{
    
    const titleSearch = props.array.filter((f)=>{
        if(f.title.includes(searchTerm)){
            
            return f
        }else{
            return
        }
        
    })
    const articleSearch = props.array.filter((f)=>{
        if(f.article.includes(searchTerm)){
            
            return f
        }else{
            return
        }
        
    })
    if( !searchTerm ){
        console.log('search clicked', searchTerm, titleSearch, articleSearch)
        props.setAlertMessage('No keyword selected')
        props.setShowAlert(true)
        return 
    
    }else if(titleSearch.length < 1 && articleSearch.length < 1){
        props.setAlertMessage('Nothing Found. Try changing the keyword or choosing a different search location from the dropdown',searchTerm, titleSearch, articleSearch,)
        props.setShowAlert(true)
        return
    }else if(props.searchLocation === 'title'){
        console.log('search clicked', searchTerm, titleSearch, articleSearch)
        props.setShowAlert(false)
    
       return props.setNewArray(titleSearch)
    
    }else if(props.searchLocation === 'article'){
        console.log('search clicked', searchTerm, articleSearch)
        props.setShowAlert(false)
        props.closeAllOptions()
       return props.setNewArray(articleSearch)

    }
    // takein array and filter by searchTerm
    }

    
        return(
            <Form.Group style={{border: '2px solid green', width:'100%'}}>
            <Form.Label style={{border: '2px solid green',width: '100% ',textAlign: 'center'}}>{props.searchLocation}</Form.Label>
            <Row>
            <Form.Control style={{width:'60%', marginLeft: '5%', marginRight: '0px'}}
             type='text' placeholder={`Search VIA ${props.searchLocation} text`} onChange={(e)=>{
                changeSearchTerm(e.target.value)
            }} />
            <Button style={{width:'25%', marginLeft: '0px', marginRight: 'auto'}} 
            onClick={()=>{
                handleSearch()
            }}
            >
            Search
            </Button> 
            </Row>
            </Form.Group>

           
           
        )
    }

export default SearchOptions
