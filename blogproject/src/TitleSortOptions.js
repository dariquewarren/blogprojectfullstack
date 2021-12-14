import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {BsFillCaretUpFill} from 'react-icons/bs'
import {BsFillCaretDownFill} from 'react-icons/bs'


const TitleSortOptions = (props)=>{
    let newArray

    const sortTitleAscending =(array,sortDirection)=>{

        let newArray =array.sort((a, b)=>{
            if(a.title < b.title){
               return -1
            }else if(a > b){
               return 1
            }
            else{
                return 0
            }
        })
       props.setSortMessage('Alphabetical TITLE ASCENDING')
       props.setNewArray(newArray)
       console.log('ascending clicked', sortDirection, newArray);
   }
   
   const sortTitleDescending =(array, sortDirection)=>{
     let newArray =  array.sort((a, b)=>{
        if(a.title > b.title){
           return -1
        }else if(a < b){
           return 1
        }
        else{
            return 0
        }
    })
       props.setSortMessage('Alphabetical TITLE DESCENDING')
       props.setNewArray(newArray)
           console.log('descending clicked', sortDirection, newArray );
   }


    const handleTitleSort = (currentArray, currentDirection)=>{

        switch (currentDirection){
            case 'AZ' :
                sortTitleAscending(currentArray, currentDirection)
            break;
            case 'ZA' :
                sortTitleDescending(currentArray, currentDirection)

            break;
            default:
            console.log('no direction')
        }
    }

    return(
        <Container style={{border: '2px solid red', width: 'auto'}}>
        
      
        <BsFillCaretUpFill style={{border: '2px solid black'}} onClick={()=>{
            handleTitleSort(props.array,'AZ')
            
        }}  />
        <BsFillCaretDownFill style={{border: '2px solid black'}} onClick={()=>{
            handleTitleSort(props.array,'ZA')
        }}  /> 
        
    
        </Container>
    )
}
export default TitleSortOptions
