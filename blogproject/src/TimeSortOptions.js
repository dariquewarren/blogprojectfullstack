import React from 'react'
import Container from 'react-bootstrap/Container'
import {BsFillCaretUpFill} from 'react-icons/bs'
import {BsFillCaretDownFill} from 'react-icons/bs'

const TimeSortOptions = (props)=>{
   
    let newArray

    const sortTimeAscending =(array,sortDirection)=>{

        array.sort((a,b)=>{
           return a.sortableTime - b.sortableTime
       })
       props.setSortMessage('Sorted by ASCENDING TIME')
       props.setNewArray(array)
       console.log('ascending clicked', sortDirection, array);
   }
   
   const sortTimeDescending =(array, sortDirection)=>{
       newArray = array.sort((a,b)=>{
           return b.sortableTime - a.sortableTime
       })
       props.setSortMessage('Sorted by DESCENDING TIME')
       props.setNewArray(newArray)
           console.log('descending clicked', sortDirection, newArray);
   }


    const handleTimeSort = (currentArray, currentSortDirection)=>{
        switch(currentSortDirection){
            case 'ascending':
                sortTimeAscending(currentArray, currentSortDirection)
                    break;
            case 'descending':
                sortTimeDescending(currentArray, currentSortDirection)
                    break;
        default:
        console.log('sortclicked type has no value', currentSortDirection)
          
        }
        props.closeAllOptions()
        }
    return(
        <Container style={{ width: 'auto'}}>
        
      
        <BsFillCaretUpFill style={{border: '2px solid black'}} onClick={()=>{
            handleTimeSort(props.array,'ascending')
            
        }}  />
        <BsFillCaretDownFill style={{border: '2px solid black'}} onClick={()=>{
            handleTimeSort(props.array,'descending')
        }}  /> 
        
    
        </Container>
    
    )
}

export default TimeSortOptions
