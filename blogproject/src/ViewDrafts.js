import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import AdvancedFormat from 'dayjs/plugin/advancedFormat'
// import AdvancedFormat from 'dayjs/plugin/advancedFormat' // ES 2015

import TimePicker from 'react-time-picker'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ArticleCard from './ArticleCard'
import Loading from './Loading'

const ViewDrafts =  (props)=> {
const [mappedArray, setMappedArray] = useState([])
const[originalArray,setOriginalArray] = useState([])
const [displayId, setDisplayId] = useState(null)

const [showFilter, toggleFilter] = useState(null)
const [showSort, toggleSort] = useState(null)

const [beginningDate, setBeginningDate] = useState(null)
const [endingDate, setEndingDate] = useState(null)
const [beginningTime, setBeginningTime] = useState(null)
const [endingTime, setEndingTime] = useState(null)

dayjs.extend(AdvancedFormat) // use plugin



const handleDateFilter=()=>{
    if(!beginningDate || !endingDate){
        alert(' both dates required to form a range')
console.log('beginDate',beginningDate , 'endDate', endingDate)
return
    }else{

    const filteredDateArray = mappedArray.filter((f)=>{
        let beginningDateRef = dayjs(beginningDate).valueOf()
        let endingDateRef = dayjs(endingDate).valueOf()
        let comparisonDateRef = dayjs(f.datePublished).valueOf() 
          return   comparisonDateRef >= beginningDateRef  && comparisonDateRef <= endingDateRef 
      })
      console.log('filteredDateArray', filteredDateArray)
      console.log('original array', originalArray)
      if(filteredDateArray.length < 1){
      return  alert('no data in range')

      }else{
       return setMappedArray(filteredDateArray)

      }
      

    }



}

const handleTimeFilter= ()=>{
 
 if(!beginningTime || !endingTime){
    alert(' both dates required to form a range')

 }else{

    const beginningTimeNumber = (Number(beginningTime.replace(':', ''))* 100) 
        const endingTimeNumber = (Number(endingTime.replace(':', '')) * 100)
        
    const filteredTimeArray = mappedArray.filter((f)=>{
        
        return f.sortableTime >= beginningTimeNumber && f.sortableTime <= endingTimeNumber 
    })
   console.log('filteredTimeArray', filteredTimeArray)
   console.log('beginningTime', beginningTime)
   console.log('beginningTimeNumber', beginningTimeNumber)
   console.log('endingTime', endingTime)
   console.log('endingTimeNumber', endingTimeNumber)
   console.log('originalArray', originalArray)
   if(filteredTimeArray.length < 1){
    return  alert('no data in range')

    }else{
     return setMappedArray(filteredTimeArray)

    }
 }
   
}


 
useEffect(()=>{
    fetch('/drafts/all').then((response)=>{
        return response.json()
       }).then((data)=>{
           if(!data.realData || data.realData[0] === undefined ){
            setMappedArray([{title:'NoData'}])
           return  alert(data.message)  
           }else{
               setOriginalArray(data.realData)
            return setMappedArray(data.realData)

           }
   
    })
    console.log('changed')
}, [])

    return (
        <Container fluid style={{border: '2px dashed red', marginBottom: '2rem'}}>

      <SearchOptions array={mappedArray} setNewArray={setMappedArray} />
 
        {(mappedArray.length )
                ?
                <Container>
                <Container  style={{width:'100%'}}>

                {
                    mappedArray.map((m)=>{
                        if(m.id === displayId){
                        return(
        
                            <ArticleCard as='button' key={m.id} {...m}/>      
                          
                                   )}else{
        return(
            <p></p>
        )
                        }
                    })
                }
            
                </Container> 
                {(showFilter)
                    ?
                  <Container>
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
                  </Container>
                    :
                <p></p>
                }
                {
                    (showSort) ? 
                   <Container>
                   <TimeSortOptions array={mappedArray} setNewArray={setMappedArray} toggleSort={toggleSort} /> 
                   <DateSortOptions array={mappedArray} setNewArray={setMappedArray} toggleSort={toggleSort} /> 
                   <TitleSortOptions array={mappedArray} setNewArray={setMappedArray} toggleSort={toggleSort} /> 
                   </Container>
                    :
                     <p></p>
                }
                <h1> your drafts</h1>
                <Button
                onClick={()=>{
                    toggleSort(!showSort)
                    console.log(showSort)
                }}
                >Sort By</Button>
                <Button
                onClick={()=>{
                    toggleFilter(!showFilter)
                }}
                >Filter</Button>
                <Button
                onClick={()=>{
                    setMappedArray(originalArray)
                }}
                >reset list</Button>
                <div style={{border: '2px dashed red', width:'100%'}}>
                <Table bordered striped responsive ='sm' >
                <thead>
                <tr >
                
                <th >#</th>
                <th >Date added</th>
                <th >Time Added</th>
                <th >Title</th>
                </tr>
               
                </thead>
                <tbody>
            
        
                {
                    mappedArray.map((m)=>{
                        return(
                            <tr as='button'
                            onClick={()=>{
                                setDisplayId(m.id)
                            }}
                            key={m.id}>
                            <th >{(mappedArray.indexOf(m) + 1)}</th>
                            
                            <th >{m.datePublished}</th>
                            <th >{m.timePublished}</th>
                            <th > 
                            { m.title}    
                               
                            </th>
                            </tr>
                           
                        )
                    })
                }
                </tbody>
                </Table>
                </div>
                </Container>
            :
            <Loading/>
        }
        

        </Container>
    )
}

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
                    >Oldest first</Button>
                    <Button
                    onClick={()=>{
                        handleTimeSort(props.array,'ascending')
                    }}
                    >Newest first</Button>
                    </Form.Group>
        </Container>
    )
}

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
        <Container style={{border: '2px solid red', width: '50%'}}>
        <p>By Date</p>
        <Form.Group>
        <Button
        onClick={()=>{
            handleDateSort(props.array, 'ascending')
        }}
        >Newest</Button>
        <Button
        onClick={()=>{
            handleDateSort(props.array, 'descending')
        }}
        >Oldest</Button>
        </Form.Group>
        </Container>
    )
}

const TitleSortOptions = (props)=>{

    const handleTitleSort = (array, direction)=>{
        let newArray
        switch (direction){
            case 'AZ' :
            newArray = array.sort((a,b)=>{
                if (a.title < b.title) {
                    return -1;
                  }
                  if (a.title > b.title) {
                    return 1;
                  }
                  return 0;
            }) ;   
            console.log(direction, newArray);
            break;
            case 'ZA' :
                newArray = array.sort((a,b)=>{
                    if (a.title > b.title) {
                        return -1;
                      }
                      if (a.title < b.title) {
                        return 1;
                      }
                      return 0;
                }) ;   
                console.log(direction, newArray);
            break;
            default:
            console.log('no direction')
        }
        props.setNewArray(newArray)
        props.toggleSort(false)
    }

    return(
        <Container style={{border: '2px solid red', width: '50%'}}>
        <p>By Title</p>
        <Form.Group>
        <Button
        onClick={()=>{
            handleTitleSort(props.array, 'AZ')
        }}
        >Title(AZ)</Button>
        <Button
        onClick={()=>{
            handleTitleSort(props.array, 'ZA')
        }}
        >Title(ZA)</Button>
        </Form.Group>
        </Container>
    )
}

const SearchOptions = (props)=>{
const [searchTerm, changeSearchTerm] = useState(undefined)
const [searchParam, changeSearchParam] = useState(undefined)

const handleSearch =()=>{

const titleSearch = props.array.filter((f)=>{
    if(f.title.includes(searchTerm)){
        
        return f
    }else{
        return
    }
    
})
const articleSearch = props.array.filter((f)=>{
    if(f.article.includes(searchTerm)){
        
        return f
    }else{
        return
    }
    
})
if( !searchTerm ){
    console.log('search clicked', searchTerm, titleSearch, articleSearch)
    return alert('please type keyword')

}else if(titleSearch.length < 1 || articleSearch.length < 1){
return alert('no results')
}else{
    console.log('search clicked', searchTerm, titleSearch, articleSearch)

   return props.setNewArray(titleSearch)

}
// takein array and filter by searchTerm
}
    return(
        <Container>
        <Form.Control type='text' placeholder={`Type keyword(s) here to search VIA ${searchParam}`} onChange={(e)=>{
            changeSearchTerm(e.target.value)
        }} />
        <Button disabled={(searchParam) ? false: true}
        onClick={()=>{
            handleSearch()
        }}
        >
        Search
        </Button>   
        <Dropdown as={ButtonGroup}>
  <Button variant="success">{(searchParam )? `Currently Searching via ${searchParam.toUpperCase()} `: `Select search location from dropdown`}</Button>

  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item value={'title'} as={Button} onClick={(e)=>{
        changeSearchParam(e.target.value)
        console.log('in title button clicked', e.target.value)
    }}>in title</Dropdown.Item>
    <Dropdown.Item value={'article'} as={Button} onClick={(e)=>{
        changeSearchParam(e.target.value)
        console.log('in article button clicked',e.target.value)
    }}>in article </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


        </Container>
    )
}
export default ViewDrafts
