import React, {useState} from 'react'
import dayjs from 'dayjs'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

const DateFilterOptions = (props)=>{
    const [beginningDate, setBeginningDate] = useState(null)
    const [endingDate, setEndingDate] = useState(null)

    const handleDateFilter=()=>{
        if(!beginningDate || !endingDate){
           props.setAlertMessage(' both dates required to form a range') 
           props.setShowAlert(true)
    console.log('beginDate',beginningDate , 'endDate', endingDate)
    return
        }else if(dayjs(beginningDate).valueOf() > dayjs(endingDate).valueOf() ){
          props.setAlertMessage(' start date must be before end date') 
          props.setShowAlert(true)
          return
        }else{
          let beginningDateRef = dayjs(beginningDate).valueOf()
          let endingDateRef = dayjs(endingDate).valueOf()
         
        const filteredDateArray = props.mappedArray.filter((f)=>{
             let comparisonDateRef = dayjs(f.datePublished).valueOf() 
              return   comparisonDateRef >= beginningDateRef  && comparisonDateRef <= endingDateRef 
          })
          console.log('filteredDateArray', filteredDateArray)
          if(filteredDateArray.length < 1){

          props.setAlertMessage('no data in range')
            props.setShowAlert(true)
            return 
          }else{
            props.setShowAlert(false)
            props.closeAllOptions()
            props.setFilterMessage(`ARTICLES FILTERED BETWEEN ${dayjs(beginningDate).format('M/D')} AND ${dayjs(endingDate).format('M/D')}`)
           return  props.setMappedArray(filteredDateArray)
           
          }
          
    
        }
    
    
    
    }

return(
    <Row>

                  <Form.Group style={{width:'50%'}} >
                  <Form.Label style={{width:'100%'}}>Start Date</Form.Label>
                  <Form.Control style={{width:'100%'}} type='date' onChange={(e)=>{
                    setBeginningDate(e.target.value)
                      console.log(e.target.value)
                  }}/>
                  </Form.Group>
                  <Form.Group style={{width:'50%'}} >
                  <Form.Label style={{width:'100%'}}>End Date</Form.Label>
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
)
}

export default DateFilterOptions
