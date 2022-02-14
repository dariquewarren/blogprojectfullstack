import React, {useState} from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
const TimeFilterOptions = (props)=>{
const [beginningTime, setBeginningTime] = useState()
const [endingTime, setEndingTime] =useState()

const transformTime = (timeString)=>{
  const timeNumber = (Number(timeString.replace(':', ''))) 

  if(timeString[0] ==='0' && timeString[1]==='0' ){
    let midnightString = `12:${timeNumber} AM`
    console.log('midnight', midnightString)
    return midnightString
  }else if(timeNumber <= 1159 && timeNumber >= 1 ){
    let morningString = `${timeString[0]}${timeString[1]}${timeString[2]}${timeString[3]}${timeString[4]} AM`
    console.log('morning', morningString  )
    return morningString
  }else if(timeNumber < 1300 && timeNumber > 1159){
  let noonString = `${timeString[0]}${timeString[1]}${timeString[2]}${timeString[3]}${timeString[4]} PM`
  console.log('noon', timeNumber, noonString)
  return noonString
  }else if(timeNumber >= 1300){
   let newTimeNumber = timeNumber - 1200
    let afternoonTimeString =String(newTimeNumber)
    let afternoonString =
    (afternoonTimeString.length === 3)
    ?
    `${afternoonTimeString[0]}:${afternoonTimeString[1]}${afternoonTimeString[2]} PM`
    :
     `${afternoonTimeString[0]}${afternoonTimeString[1]}:${afternoonTimeString[2]}${afternoonTimeString[3]} PM`
    console.log('afternoon', afternoonString)
    return afternoonString
  }else{
    return '?????'
  }
 }

let beginningTimeDisplay 
let endingTimeDisplay

    const handleTimeFilter= ()=>{
 
        if(!beginningTime || !endingTime){
      props.setAlertMessage(' both dates required to form a range')
      props.setShowAlert(true)

        }else if((Number(beginningTime.replace(':', ''))* 100) > (Number(endingTime.replace(':', '')) * 100) ){
          props.setAlertMessage(' beginning date must be later than ending date. ex: 12:00AM to 11:59PM')
          props.setShowAlert(true)

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
             
          beginningTimeDisplay = transformTime (beginningTime)
          endingTimeDisplay = transformTime (endingTime)            
             
             props.setFilterMessage(`Showing messages from ${beginningTimeDisplay} to ${endingTimeDisplay}`)
            props.closeAllOptions()
            return props.setMappedArray(filteredTimeArray)
       
           }
        }
          
       }
    
    return(
        <Row>
        <Form.Group style={{width:'50%'}}>
        <Form.Label style={{width:'100%'}}>start Time {beginningTimeDisplay}</Form.Label>
        <Form.Control 
        style={{width:'100%'}}
        type='time'                  
        onChange={(e)=>{
          setBeginningTime(e.target.value)

        }}/>
        
        
        </Form.Group>
        <Form.Group style={{width:'50%'}}>
        <Form.Label style={{width:'100%'}}>end Time {endingTimeDisplay}</Form.Label>
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
