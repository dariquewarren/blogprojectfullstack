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

const [beginningDate, setBeginningDate] = useState(null)
const [endingDate, setEndingDate] = useState(null)
const [beginningTime, setBeginningTime] = useState(null)
const [endingTime, setEndingTime] = useState(null)

dayjs.extend(AdvancedFormat) // use plugin



const handleDateFilter=()=>{
    if(!beginningDate || !endingDate){
        alert(' both dates required to form a range')
console.log('beginDate',beginningDate , 'endDate', endingDate)
return
    }else{

    const filteredDateArray = mappedArray.filter((f)=>{
        let beginningDateRef = dayjs(beginningDate).valueOf()
        let endingDateRef = dayjs(endingDate).valueOf()
        let comparisonDateRef = dayjs(f.datePublished).valueOf() 
          return   comparisonDateRef >= beginningDateRef  && comparisonDateRef <= endingDateRef 
      })
      console.log('filteredDateArray', filteredDateArray)
      console.log('original array', originalArray)
      if(filteredDateArray.length < 1){
      return  alert('no data in range')

      }else{
       return setMappedArray(filteredDateArray)

      }
      

    }



}

const handleTimeFilter= ()=>{
 
 if(!beginningTime || !endingTime){
    alert(' both dates required to form a range')

 }else{

    const beginningTimeNumber = (Number(beginningTime.replace(':', ''))* 100) 
        const endingTimeNumber = (Number(endingTime.replace(':', '')) * 100)
        
    const filteredTimeArray = mappedArray.filter((f)=>{
        
        return f.sortableTime >= beginningTimeNumber && f.sortableTime <= endingTimeNumber 
    })
   console.log('filteredTimeArray', filteredTimeArray)
   console.log('beginningTime', beginningTime)
   console.log('beginningTimeNumber', beginningTimeNumber)
   console.log('endingTime', endingTime)
   console.log('endingTimeNumber', endingTimeNumber)
   console.log('originalArray', originalArray)
   if(filteredTimeArray.length < 1){
    return  alert('no data in range')

    }else{
     return setMappedArray(filteredTimeArray)

    }
 }
   
}


 
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
                  <Row>
                  <Form.Group style={{width:'50%'}} >
                  <Form.Label style={{width:'100%'}}>Beginning</Form.Label>
                  <Form.Control style={{width:'100%'}} type='date' onChange={(e)=>{
                      setBeginningDate(e.target.value)
                      console.log(e.target.value)
                  }}/>
                  </Form.Group>
                  <Form.Group style={{width:'50%'}} >
                  <Form.Label style={{width:'100%'}}>Ending</Form.Label>
                  <Form.Control style={{width:'100%'}} type='date' onChange={(e)=>{
                      setEndingDate(e.target.value)
                   console.log(e.target.value)
               }}/>
                  </Form.Group>
                  <Button
                  onClick={()=>{
                   handleDateFilter()
                  }}
                  >Filter By Date</Button>
                  </Row>
                  <Row>
                  <Form.Group style={{width:'50%'}}>
                  <Form.Label style={{width:'100%'}}>start Time {beginningTime}</Form.Label>
                  <Form.Control 
                  style={{width:'100%'}}
                  type='time'                  
                  onChange={(e)=>{
                    setBeginningTime(e.target.value)

                  }}/>
                  
                  
                  </Form.Group>
                  <Form.Group style={{width:'50%'}}>
                  <Form.Label style={{width:'100%'}}>end Time {endingTime}</Form.Label>
                  <Form.Control 
                  style={{width:'100%'}}
                  type='time' 
                  onChange={(e)=>{
                    setEndingTime(e.target.value)

                  }}/>
                  </Form.Group>
                  <Button 
                  onClick={()=>{
                    handleTimeFilter()
                  }}
                  >Filter by time</Button>
                  </Row>
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
