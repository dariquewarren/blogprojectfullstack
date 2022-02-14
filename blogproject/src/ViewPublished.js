import React, {useState, useEffect} from 'react'
import AdminArticleCard from './AdminArticleCard'
import AlertText from './AlertText'

import SearchOptions from './SearchOptions'
import ArticleTable from './ArticleTable'
import AdminEditView from './AdminEditView'
import DateFilterOptions from './DateFilterOptions'
import TimeFilterOptions from './TimeFilterOptions'
import {BsArrowRepeat} from 'react-icons/bs'
import Container from 'react-bootstrap/Container'


import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const ViewPublished =  (props)=> {
const [mappedArray, setMappedArray] = useState([])
const [displayArray, setDisplayArray] = useState([])

const[originalArray,setOriginalArray] = useState(null)
const [displayId, setDisplayId] = useState(0)

const [showDateFilter, toggleDateFilter] = useState(false)
const [showSearchFilter, toggleSearchFilter] = useState(false)
const [showTitleSearch, toggleTitleSearch] = useState(false)
const [showArticleSearch, toggleArticleSearch] = useState(false)
const [showCategorySearch, toggleCategorySearch] = useState(false)
const [showTagsSearch, toggleTagsSearch] = useState(false)

const [showTimeFilter, toggleTimeFilter] = useState(false)
const [filterMessage, setFilterMessage] = useState()

const [sortMessage, setSortMessage] = useState()
const [showAlert, setShowAlert] = useState(false);
const [alertMessage, setAlertMessage] = useState(true);
const [editMode, toggleEditMode] = useState(false);



const closeAllOptions=()=>{
toggleDateFilter(false)
toggleTimeFilter(false)
toggleSearchFilter(false)
toggleTitleSearch(false)
toggleArticleSearch(false)
toggleCategorySearch(false)
toggleTagsSearch(false)
}

const handleDisplayedCard =(id)=>{
var foundCard = originalArray.filter((m)=>{
    return m.id === id
})
setDisplayArray(foundCard)
console.log('foundCard',foundCard)
}




 
useEffect(()=>{


    if(mappedArray.length < 1){
        setOriginalArray(props.trueArray)
        setMappedArray(props.publishedArray)
       }else{
           return
       }

       
    }, [props.trueArray,mappedArray.length, props.publishedArray])

    return  (
        <Container fluid style={{ marginBottom: '2rem'}}>
{
    displayArray.map((m)=>{

        if(m.id === displayId){
    return (
        <AdminArticleCard 
        key={m.id}
        editMode={editMode} toggleEditMode={toggleEditMode}
        {...m}/>
    )
}else{
    return(
        <div key={displayId}></div>
    )
}
})

}

        <AlertText  showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage}/>


 {(showDateFilter)
?
<DateFilterOptions 

            closeAllOptions={closeAllOptions} 
            mappedArray={mappedArray} setMappedArray={setMappedArray} 
            setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}
            setFilterMessage={setFilterMessage} filterMessage={filterMessage}
                 />
:
<p></p>
}
{(showTimeFilter)
    ?
    <TimeFilterOptions 
                closeAllOptions={closeAllOptions} 
                mappedArray={mappedArray} setMappedArray={setMappedArray} 
                setAlertMessage={setAlertMessage} setShowAlert={setShowAlert} 
                setFilterMessage={setFilterMessage} filterMessage={filterMessage}
                />
    :
    <p></p>
    }
        

    {(showTitleSearch)
        ?
        <Form.Group>
        <SearchOptions
        closeAllOptions={closeAllOptions} 

         array={mappedArray} setNewArray={setMappedArray}  
         setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}
         searchLocation={'title'} setFilterMessage={setFilterMessage}
         />

        </Form.Group>
        :
    <p></p>
    }
    {(showArticleSearch)
        ?
        <Form.Group>
        <SearchOptions
        closeAllOptions={closeAllOptions} 
         array={mappedArray} setNewArray={setMappedArray}  
         setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}
         searchLocation={'article'} setFilterMessage={setFilterMessage}

         />

        </Form.Group>
        :
    <p></p>
    }


    {(showCategorySearch)
    ?
    <Form.Group>
    <SearchOptions
    closeAllOptions={closeAllOptions} 
     array={mappedArray} setNewArray={setMappedArray}  
     setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}
     searchLocation={'category'} setFilterMessage={setFilterMessage}

     />

    </Form.Group>
    :
    <p></p>
    }
    {(showTagsSearch)
        ?
        <Form.Group>
        <SearchOptions
        closeAllOptions={closeAllOptions} 
         array={mappedArray} setNewArray={setMappedArray}  
         setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}
         searchLocation={'tags'} setFilterMessage={setFilterMessage}
    
         />
    
        </Form.Group>
        :
        <p></p>
        }

       {(showSearchFilter)
        ?
        <Form.Group>
        <Button
        onClick={()=>{
            toggleTitleSearch(!showTitleSearch)
            toggleArticleSearch(false)
                        toggleCategorySearch(false)
                        toggleTagsSearch(false)

       }}
        >Title</Button>

        <Button
        onClick={()=>{
            toggleArticleSearch(!showArticleSearch)
            toggleTitleSearch(false)
            toggleCategorySearch(false)
            toggleTagsSearch(false)
        }}
        >Article</Button>
        <Button
        onClick={()=>{
            toggleCategorySearch(!showCategorySearch)
            toggleTitleSearch(false)
            toggleArticleSearch(false)
            toggleTagsSearch(false)
        }}
        >Category</Button>
        <Button
        onClick={()=>{
            toggleTagsSearch(!showTagsSearch)
            toggleCategorySearch(false)
            toggleArticleSearch(false)
            toggleTitleSearch(false)
        }}
        >Tags</Button>
        </Form.Group>
        :
    <p></p>
    }
        
              
         
                {(editMode) 
                    ?
                    displayArray.map((m)=>{
                    return (
                        <div>
                
                        <AdminEditView
                        key={m.id}
                        editMode={editMode} toggleEditMode={toggleEditMode}

                        {...m}/> 
                        </div>
                    )
                })
                :
                <Container  style={{width:'100%'}}>
                <Container>
               
                <Button
                onClick={()=>{
                    closeAllOptions()
                    toggleDateFilter(!showDateFilter)
                }}
                >Date Filter</Button>
                <Button
                onClick={()=>{
                    closeAllOptions()

                    toggleTimeFilter(!showTimeFilter)
                }}
                >Time Filter</Button>
                <Button
                onClick={()=>{
                    closeAllOptions()

                    toggleSearchFilter(!showSearchFilter)
                   

                }}>Search Options</Button>
            
                
                <h4>{sortMessage}</h4>
                <h4>{filterMessage}</h4>
                
                

              
               
                  
                
                </Container>
                <div style={{border: '2px dashed black', width:'100%'}}>
                <h6 style={{textAlign: 'right'}}>
                <BsArrowRepeat
                style={{ height: '2rem', width: '2rem'}}
                onClick={()=>{
                    setFilterMessage('')
                    setSortMessage('')
                    setShowAlert(false)
                    closeAllOptions()
                    setMappedArray(originalArray)
                    setDisplayArray([])
                }}
                /></h6>
                
                

               <ArticleTable 
               closeAllOptions={closeAllOptions} 
               handleDisplayedCard={handleDisplayedCard}

               mappedArray={mappedArray} setMappedArray={setMappedArray} 
               setSortMessage={setSortMessage} setDisplayId={setDisplayId}
                setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}
               
               />
                </div>

            
                </Container> 
                }
        

        </Container>
    )
}

export default ViewPublished
