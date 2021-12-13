import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import AdvancedFormat from 'dayjs/plugin/advancedFormat'
// import AdvancedFormat from 'dayjs/plugin/advancedFormat' // ES 2015
import AlertText from './AlertText'
import SearchOptions from './SearchOptions'
import DateSortOptions from './DateSortOptions'
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
const[originalArray,setOriginalArray] = useState([])
const [displayId, setDisplayId] = useState(null)

const [showFilter, toggleFilter] = useState(null)
const [showSort, toggleSort] = useState(null)
const [showAlert, setShowAlert] = useState(false);
const [AlertMessage, setAlertMessage] = useState(true);




dayjs.extend(AdvancedFormat) // use plugin







 
useEffect(()=>{
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
    console.log('changed')
}, [])

    return (
        <Container fluid style={{border: '2px dashed red', marginBottom: '2rem'}}>
        <AlertText  showAlert={showAlert} setShowAlert={setShowAlert} AlertMessage={AlertMessage}/>


        <SearchOptions array={mappedArray} setNewArray={setMappedArray}  setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}/>
 
        {(mappedArray.length )
                ?
                <Container>
                <Container  style={{width:'100%'}}>

                {
                    mappedArray.map((m)=>{
                        if(m.id === displayId){
                        return(
        
                            <ArticleCard as='button' key={m.id} {...m}/>      
                          
                                   )}else{
        return(
            <p></p>
        )
                        }
                    })
                }
            
                </Container> 
                {(showFilter)
                    ?
                  <Container>
              <DateFilterOptions toggleFilter={toggleFilter} mappedArray={mappedArray} setMappedArray={setMappedArray} />
              <TimeFilterOptions toggleFilter={toggleFilter} mappedArray={mappedArray} setMappedArray={setMappedArray} />
                 
                  </Container>
                    :
                <p></p>
                }
                {
                    (showSort) ? 
                   <Container>
                   <TimeSortOptions array={mappedArray} setNewArray={setMappedArray} toggleSort={toggleSort} /> 
                   <DateSortOptions array={mappedArray} setNewArray={setMappedArray} toggleSort={toggleSort} /> 
                   <TitleSortOptions array={mappedArray} setNewArray={setMappedArray} toggleSort={toggleSort} /> 
                   </Container>
                    :
                     <p></p>
                }
                <h1> your drafts</h1>
                <Button
                onClick={()=>{
                    toggleSort(!showSort)
                    console.log(showSort)
                }}
                >Sort By</Button>
                <Button
                onClick={()=>{
                    toggleFilter(!showFilter)
                }}
                >Filter</Button>
                <Button
                onClick={()=>{
                    setMappedArray(originalArray)
                }}
                >reset list</Button>
                <div style={{border: '2px dashed red', width:'100%'}}>
                <Table bordered striped responsive ='sm' >
                <thead>
                <tr >
                
                <th >#</th>
                <th >Date added</th>
                <th >Time Added</th>
                <th >Title</th>
                </tr>
               
                </thead>
                <tbody>
            
        
                {
                    mappedArray.map((m)=>{
                        return(
                            <tr as='button'
                            onClick={()=>{
                                setDisplayId(m.id)
                            }}
                            key={m.id}>
                            <th >{(mappedArray.indexOf(m) + 1)}</th>
                            
                            <th >{m.datePublished}</th>
                            <th >{m.timePublished}</th>
                            <th > 
                            { m.title}    
                               
                            </th>
                            </tr>
                           
                        )
                    })
                }
                </tbody>
                </Table>
                </div>
                </Container>
            :
            <Loading/>
        }
        

        </Container>
    )
}


export default ViewDrafts
