import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {BsFillCaretUpFill} from 'react-icons/bs'
import {BsFillCaretDownFill} from 'react-icons/bs'



const DateSortOptions = (props)=>{
    let newArray
    
    const sortAscending =(array,sortDirection)=>{

         array.sort((a,b)=>{
            return a.sortableDate - b.sortableDate
        })
        props.setSortMessage('Sorted by ASCENDING DATE')
        props.setNewArray(array)
        console.log('ascending clicked', sortDirection, array);
    }
    
    const sortDescending =(array, sortDirection)=>{
        newArray = array.sort((a,b)=>{
            return b.sortableDate - a.sortableDate
        })
        props.setSortMessage('Sorted by DESCENDING DATE')
        props.setNewArray(newArray)
            console.log('descending clicked', sortDirection, newArray);
    }

    const handleDateSort=(currentArray, currentSortDirection)=>{
    if(currentSortDirection === 'ascending'){
        props.closeAllOptions()
      return  sortAscending(currentArray, currentSortDirection)
    }else if(currentSortDirection === 'descending'){
        props.closeAllOptions()
       return sortDescending(currentArray, currentSortDirection)
    }else{
 props.setAlertMessage('nothing chosen: consult developer team')
 props.setShowAlert(true)
}
    // take in sortby value, sort direction and array to sort
        // create sorted array depending on sortby type
            // setmapped array value to the sorted array
    

            
}
    return(
        <Container style={{ width: 'auto'}}>
        
      
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
