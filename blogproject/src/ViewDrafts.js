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

// DateFilterOptions
// TimeFilterOptions

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

const [showFilter, toggleFilter] = useState(null)
const [filterMessage, setFilterMessage] = useState('filter by:')

const [sortMessage, setSortMessage] = useState()
const [showAlert, setShowAlert] = useState(false);
const [AlertMessage, setAlertMessage] = useState(true);




dayjs.extend(AdvancedFormat) // use plugin







 
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
           console.log('callback function')
       }
    }, [mappedArray])

    return (
        <Container fluid style={{border: '2px dashed red', marginBottom: '2rem'}}>
        <AlertText  showAlert={showAlert} setShowAlert={setShowAlert} AlertMessage={AlertMessage}/>


        <SearchOptions array={mappedArray} setNewArray={setMappedArray}  setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}/>
 
        
                <Container>
                <h1> your drafts</h1>
               
                
                <Button
                onClick={()=>{
                    toggleFilter(!showFilter)
                    console.log(showFilter)
                }}
                >Filter</Button>
                <Button
                onClick={()=>{
                    setMappedArray(originalArray)
                }}
                >reset list</Button><h4>{sortMessage}</h4>
                <Container  style={{width:'100%'}}>

                <div style={{border: '2px dashed red', width:'100%'}}>
                
               <ArticleTable 
               mappedArray={mappedArray} setMappedArray={setMappedArray} 
               setSortMessage={setSortMessage} setDisplayId={setDisplayId}
                setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}
               
               />
                </div>

            
                </Container> 
                <DateFilterOptions toggleFilter={toggleFilter} mappedArray={mappedArray} setMappedArray={setMappedArray} 
                setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}
                 />
  
                <TimeFilterOptions toggleFilter={toggleFilter} mappedArray={mappedArray} setMappedArray={setMappedArray} 
                setAlertMessage={setAlertMessage} setShowAlert={setShowAlert} 
                />
                
                  
                
                
                </Container>
         
        

        </Container>
    )
}


export default ViewDrafts
