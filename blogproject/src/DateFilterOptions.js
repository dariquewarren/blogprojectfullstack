import React, {useState} from 'react'
import dayjs from 'dayjs'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

const DateFilterOptions = (props)=>{
    const [beginningDate, setBeginningDate] = useState(null)
    const [endingDate, setEndingDate] = useState(null)

    const handleDateFilter=()=>{
        if(!props.beginningDate || !props.endingDate){
            alert(' both dates required to form a range')
    console.log('beginDate',beginningDate , 'endDate', endingDate)
    return
        }else{
    
        const filteredDateArray = props.mappedArray.filter((f)=>{
            let beginningDateRef = dayjs(beginningDate).valueOf()
            let endingDateRef = dayjs(endingDate).valueOf()
            let comparisonDateRef = dayjs(f.datePublished).valueOf() 
              return   comparisonDateRef >= beginningDateRef  && comparisonDateRef <= endingDateRef 
          })
          console.log('filteredDateArray', filteredDateArray)
          if(filteredDateArray.length < 1){
          return  alert('no data in range')
    
          }else{
            props.setMappedArray(filteredDateArray)
           return props.toggleFilter(false)
    
          }
          
    
        }
    
    
    
    }

return(
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
)
}

export default DateFilterOptions
