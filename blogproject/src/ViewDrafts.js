import React, {useState, useEffect, useCallback} from 'react'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import AdvancedFormat from 'dayjs/plugin/advancedFormat'
// import AdvancedFormat from 'dayjs/plugin/advancedFormat' // ES 2015
import AlertText from './AlertText'
import SearchOptions from './SearchOptions'
import ArticleTable from './ArticleTable'
import TimeSortOptions from './TimeSortOptions'
import TitleSortOptions from './TitleSortOptions'
import DateFilterOptions from './DateFilterOptions'
import TimeFilterOptions from './TimeFilterOptions'
import {BsArrowRepeat} from 'react-icons/bs'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ArticleCard from './ArticleCard'
import Loading from './Loading'

const ViewDrafts =  (props)=> {
const [mappedArray, setMappedArray] = useState([])
const[originalArray,setOriginalArray] = useState(null)
const [displayId, setDisplayId] = useState(null)

const [showDateFilter, toggleDateFilter] = useState(false)
const [showSearchFilter, toggleSearchFilter] = useState(false)
const [showTitleSearch, toggleTitleSearch] = useState(false)
const [showArticleSearch, toggleArticleSearch] = useState(false)

const [showTimeFilter, toggleTimeFilter] = useState(false)
const [filterMessage, setFilterMessage] = useState()

const [sortMessage, setSortMessage] = useState()
const [showAlert, setShowAlert] = useState(false);
const [AlertMessage, setAlertMessage] = useState(true);


dayjs.extend(AdvancedFormat) // use plugin

const closeAllOptions=()=>{
toggleDateFilter(false)
toggleTimeFilter(false)
toggleSearchFilter(false)
toggleTitleSearch(false)
toggleArticleSearch(false)

}






 
useEffect(()=>{
    if(mappedArray.length < 1){
        fetch('/drafts/all').then((response)=>{
            return response.json()
           }).then((data)=>{
               if(!data.realData || data.realData[0] === undefined ){
                   
                setMappedArray([{title:'NoData'}])
               return  alert(data.message)  
               }else{
                   setOriginalArray(data.realData)
                return setMappedArray(data.realData)
    
               }
       
        })
       }

       return ()=>{
           console.log('callback function called')
       }
    }, [mappedArray])

    return (
        <Container fluid style={{border: '2px dashed red', marginBottom: '2rem'}}>
        <AlertText  showAlert={showAlert} setShowAlert={setShowAlert} AlertMessage={AlertMessage}/>


 {(showDateFilter)
?
<DateFilterOptions 

            closeAllOptions={closeAllOptions} 
            mappedArray={mappedArray} setMappedArray={setMappedArray} 
            setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}
            setFilterMessage={setFilterMessage} filterMessage={filterMessage}
                 />
:
<p></p>
}
{(showTimeFilter)
    ?
    <TimeFilterOptions 
                closeAllOptions={closeAllOptions} 
                mappedArray={mappedArray} setMappedArray={setMappedArray} 
                setAlertMessage={setAlertMessage} setShowAlert={setShowAlert} 
                setFilterMessage={setFilterMessage} filterMessage={filterMessage}
                />
    :
    <p></p>
    }
        

    {(showTitleSearch)
        ?
        <Form.Group>
        <SearchOptions
        closeAllOptions={closeAllOptions} 

         array={mappedArray} setNewArray={setMappedArray}  
         setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}
         searchLocation={'title'}
         />

        </Form.Group>
        :
    <p></p>
    }
    {(showArticleSearch)
        ?
        <Form.Group>
        <SearchOptions
        closeAllOptions={closeAllOptions} 
         array={mappedArray} setNewArray={setMappedArray}  
         setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}
         searchLocation={'article'}

         />

        </Form.Group>
        :
    <p></p>
    }

       {(showSearchFilter)
        ?
        <Form.Group>
        <Button
        onClick={()=>{
            toggleTitleSearch(!showTitleSearch)
            toggleArticleSearch(false)
        }}
        >Title</Button>

        <Button
        onClick={()=>{
            toggleArticleSearch(!showArticleSearch)
            toggleTitleSearch(false)
        }}
        >Article</Button>
        </Form.Group>
        :
    <p></p>
    }
        
                <Container>
               
               
                
                <Button
                onClick={()=>{
                    closeAllOptions()
                    toggleDateFilter(!showDateFilter)
                }}
                >Date Filter</Button>
                <Button
                onClick={()=>{
                    closeAllOptions()

                    toggleTimeFilter(!showTimeFilter)
                }}
                >Time Filter</Button>
                <Button
                onClick={()=>{
                    closeAllOptions()

                    toggleSearchFilter(!showSearchFilter)
                   

                }}>Search Options</Button>
            
                
                <h4>{sortMessage}</h4>
                <h4>{filterMessage}</h4>

                <Container  style={{width:'100%'}}>
               
                <div style={{border: '2px dashed red', width:'100%'}}>
                <h6 style={{border: '2px dashed red', textAlign: 'right'}}>
                <BsArrowRepeat
                style={{ height: '2rem', width: '2rem'}}
                onClick={()=>{
                    setFilterMessage('')
                    setSortMessage('')
                    setShowAlert(false)
                    closeAllOptions()
                    setMappedArray(originalArray)
                }}
                /></h6>
                
               <ArticleTable 
               closeAllOptions={closeAllOptions} 

               mappedArray={mappedArray} setMappedArray={setMappedArray} 
               setSortMessage={setSortMessage} setDisplayId={setDisplayId}
                setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}
               
               />
                </div>

            
                </Container> 
               
                
                  
                
                
                </Container>
         
        

        </Container>
    )
}


export default ViewDrafts
