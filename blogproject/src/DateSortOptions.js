import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {BsFillCaretUpFill} from 'react-icons/bs'
import {BsFillCaretDownFill} from 'react-icons/bs'



const DateSortOptions = (props)=>{
    
    const handleDateSort=(array, sortDirection)=>{
        let newArray
    switch( sortDirection){
        case 'ascending' :
            newArray = array.sort((a,b)=>{
                return a.sortableDate - b.sortableDate
            })
            console.log('date clicked', sortDirection, newArray);
            break;
        case 'descending' :
            newArray = array.sort((a,b)=>{
                return b.sortableDate - a.sortableDate
            })
                console.log('date clicked', sortDirection, newArray);
                break;
        default:
    console.log('sortclicked type has no value',  sortDirection)
    
        }
    // take in sortby value, sort direction and array to sort
        // create sorted array depending on sortby type
            // setmapped array value to the sorted array
            props.setNewArray(newArray)
            props.toggleSort(false)
}
    return(
        <Container style={{border: '2px solid red', width: 'auto'}}>
        
      
        <BsFillCaretUpFill style={{border: '2px solid black'}} onClick={()=>{
            handleDateSort(props.array, 'ascending')
        }}  />
        <BsFillCaretDownFill style={{border: '2px solid black'}} onClick={()=>{
            handleDateSort(props.array, 'descending')
        }}  /> 
        
    
        </Container>
    )
}

export default DateSortOptions
