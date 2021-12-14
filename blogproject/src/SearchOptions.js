import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const SearchOptions = (props)=>{
    const [searchTerm, changeSearchTerm] = useState(undefined)
    const [searchParam, changeSearchParam] = useState(undefined)
    
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
    }else if(searchParam === 'title'){
        console.log('search clicked', searchTerm, titleSearch, articleSearch)
        props.setShowAlert(false)
    
       return props.setNewArray(titleSearch)
    
    }else if(searchParam === 'article'){
        console.log('search clicked', searchTerm, articleSearch)
        props.setShowAlert(false)
    
       return props.setNewArray(articleSearch)

    }
    // takein array and filter by searchTerm
    }
        return(
            <Container>
            <Form.Control type='text' placeholder={`Type keyword(s) here to search VIA ${searchParam}`} onChange={(e)=>{
                changeSearchTerm(e.target.value)
            }} />
            <Button disabled={(searchParam) ? false: true}
            onClick={()=>{
                handleSearch()
            }}
            >
            Search
            </Button>   
            <Dropdown as={ButtonGroup}>
      <Button variant="success">{(searchParam )? `Currently Searching via ${searchParam.toUpperCase()} `: `Select search location from dropdown`}</Button>
    
      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
    
      <Dropdown.Menu>
        <Dropdown.Item value={'title'} as={Button} onClick={(e)=>{
            changeSearchParam(e.target.value)
            console.log('in title button clicked', e.target.value)
        }}>in title</Dropdown.Item>
        <Dropdown.Item value={'article'} as={Button} onClick={(e)=>{
            changeSearchParam(e.target.value)
            console.log('in article button clicked',e.target.value)
        }}>in article </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
    
            </Container>
        )
    }

export default SearchOptions
