import React, {useState} from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
const TimeFilterOptions = (props)=>{
    const [beginningTime, setBeginningTime] = useState(null)
    const [endingTime, setEndingTime] = useState(null)

    const handleTimeFilter= ()=>{
 
        if(!beginningTime || !endingTime){
           alert(' both dates required to form a range')
       
        }else{
       
           const beginningTimeNumber = (Number(beginningTime.replace(':', ''))* 100) 
               const endingTimeNumber = (Number(endingTime.replace(':', '')) * 100)
               
           const filteredTimeArray = props.mappedArray.filter((f)=>{
               
               return f.sortableTime >= beginningTimeNumber && f.sortableTime <= endingTimeNumber 
           })
          console.log('filteredTimeArray', filteredTimeArray)
          console.log('beginningTime', beginningTime)
          console.log('beginningTimeNumber', beginningTimeNumber)
          console.log('endingTime', endingTime)
          console.log('endingTimeNumber', endingTimeNumber)
          if(filteredTimeArray.length < 1){
           return  alert('no data in range')
       
           }else{
            props.setMappedArray(filteredTimeArray)
            return props.toggleFilter(false)
       
           }
        }
          
       }
    
    return(
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
    )
}


export default TimeFilterOptions
