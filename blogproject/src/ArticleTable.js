import React, {useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import DateSortOptions from './DateSortOptions'
import TimeSortOptions from './TimeSortOptions'
import TitleSortOptions from './TitleSortOptions'
import Loading from './Loading'
function ArticleTable(props) {

useEffect(()=>{
console.log('array', props.mappedArray)

}, [props.mappedArray])
    return (
        <div>
        <Table bordered striped responsive ='sm' >
        <thead>
        <tr  >
        
        <th >#</th>
        <th >Date added 
        <DateSortOptions 
        closeAllOptions={props.closeAllOptions}
        array={props.mappedArray} setNewArray={props.setMappedArray} 
        setSortMessage={props.setSortMessage}
     setAlertMessage={props.setAlertMessage} setShowAlert={props.setShowAlert}
         /> 
        </th>
        <th >Time Added
        <TimeSortOptions 
        closeAllOptions={props.closeAllOptions}
        array={props.mappedArray} setNewArray={props.setMappedArray} 
        setSortMessage={props.setSortMessage}
         setAlertMessage={props.setAlertMessage} setShowAlert={props.setShowAlert} /> 
                 
        </th>
        <th >Title
        <TitleSortOptions 
        closeAllOptions={props.closeAllOptions}
        array={props.mappedArray} setNewArray={props.setMappedArray} 
        setSortMessage={props.setSortMessage}
        setAlertMessage={props.setAlertMessage} setShowAlert={props.setShowAlert}
         /> 
        </th>
        </tr>
       
        </thead>
        <tbody>
    

    { props.mappedArray.map((m)=>{
            return(
                <tr as='button'
                key={m.id}
                onClick={()=>{
                    props.setDisplayId(m.id)
                    props.handleDisplayedCard(m.id)

                }}
                >
                <th >{(props.mappedArray.indexOf(m) + 1)}</th>
                
                <th >{m.datePublished}</th>
                <th >{m.timePublished}</th>
                <th > 
                { m.title}    
                   
                </th>
                <th>{m.id}</th>
                </tr>
               
            )
        })
        
    }
        </tbody>
        </Table>
        </div>
    )
}

export default ArticleTable
