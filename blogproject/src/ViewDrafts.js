import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import TimePicker from 'react-time-picker'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ArticleCard from './ArticleCard'
import Loading from './Loading'

const ViewDrafts =  (props)=> {
const [mappedArray, setMappedArray] = useState([])
const [displayId, setDisplayId] = useState(null)

const [showFilter, toggleFilter] = useState(null)
const [beginningDate, setBeginningDate] = useState(null)
const [endingDate, setEndingDate] = useState(null)
const [beginningTime, setBeginningTime] = useState(null)
const [endingTime, setEndingTime] = useState(null)



const [showSort, toggleSort] = useState(null)

var originalArray = undefined
const handleDateFilter=()=>{
    if(!beginningDate || !endingDate){
        alert(' both dates required')
console.log('beginDate',beginningDate , 'endDate', endingDate)
return
    }else if(!mappedArray){
        alert('no mapped array')
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

    }



}

const handleTimeFilter= (array, beginTime, endTime)=>{

}
const handleSort=()=>{
    
}
useEffect(()=>{
if(mappedArray.length < 1 || !mappedArray){
    fetch('/drafts/all').then((response)=>{
        return response.json()
       }).then((data)=>{
           if(!data.realData || data.realData[0] === undefined ){
           return  alert(data.message)  
           }else{
            originalArray = data.realData
            return setMappedArray(data.realData)

           }
   
    })
}else {
    return
}
}, [mappedArray])

    return (
        <Container fluid style={{border: '2px dashed red', marginBottom: '2rem'}}>

      
 
        {(mappedArray.length > 0)
                ?
                <>
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
                  <Form.Group>
                  <Form.Label>start date {beginningTime}</Form.Label>
                  <TimePicker onChange={(e)=>{
                      setBeginningTime(e.target.value)
                  }}/>
                  </Form.Group>
                  <Form.Group>
                  <Form.Label>end date {endingTime}</Form.Label>
                  <TimePicker onChange={(e)=>{
                    setEndingTime(e.target.value)
                }}/>
                  </Form.Group>
                  <Button>Filter by time</Button>
                  </Row>
                  </Container>
                    :
                <p></p>
                }
                <h1> your drafts</h1>
                <Button>Sort By</Button>
                <Button
                onClick={()=>{
                    toggleFilter(!showFilter)
                }}
                >Filter</Button>
                <div style={{border: '2px dashed red', width:'100%'}}>
                <Table bordered striped responsive >
                <thead>
                <tr >
                
                <th >#</th>
                <th >Title</th>
                <th >Date added</th>
                <th >Time Added</th>
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
                            <th >{m.title}</th>
                            <th >{m.datePublished}</th>
                            <th >{m.timePublished}</th>
                            </tr>
                           
                        )
                    })
                }
                </tbody>
                </Table>
                </div>
                </>
            :
            <Loading/>
        }
        

        </Container>
    )
}

export default ViewDrafts
