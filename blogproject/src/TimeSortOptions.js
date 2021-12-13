import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TimeSortOptions = (props)=>{

    const handleTimeSort = (array, sortDirection)=>{
        let newArray
        switch(sortDirection){
            case 'ascending':
                newArray = array.sort((a,b)=>{
                    return a.sortableTime - b.sortableTime
                })    
                
            console.log('time ascent case', sortDirection, newArray);
            break;
            case 'descending':
                newArray = array.sort((a,b)=>{
                    return b.sortableTime - a.sortableTime
                })      
               
            console.log('time descent case',  sortDirection, newArray);
            break;
        default:
        console.log('sortclicked type has no value', sortDirection)
          
        }
        props.setNewArray(newArray)
        props.toggleSort(false)
        }
    return(
        <Container style={{border: '2px solid red', width: '50%'}}>
       <h3>By Time</h3>

        <Form.Group>
                    <Button
                    onClick={()=>{
                        handleTimeSort(props.array,'descending')
                    }}
                    >Latest first</Button>
                    <Button
                    onClick={()=>{
                        handleTimeSort(props.array,'ascending')
                    }}
                    >Earliest first</Button>
                    </Form.Group>
        </Container>
    )
}

export default TimeSortOptions
