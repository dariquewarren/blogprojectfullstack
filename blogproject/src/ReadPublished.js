import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Article from './Article'
import { getSinglePublished } from './APICalls';
import Loading from './Loading';
function ReadPublished(props) {

    const objectArray = [{author: 'MR. Mister'}]
 const {id} = useParams()

 const [draft, setDraft] = useState()
    

 useEffect(()=>{
 if(!draft){
    getSinglePublished(id).then((data)=>{
        return data.json()
    }).then((data)=>{
        if(!data.data || data.data.article === undefined ){
            return  alert(data.message)  
            }else{
                console.log()
             return setDraft(data.data)
 
            }
    })
 }else {
     return
 }
 }, [draft])


    return (
        <Container>
        <Button>Edit Mode</Button>

        {(draft)?
    <Article {...draft} />
        :
    <Loading/>
        }
        </Container>
    )
}

export default ReadPublished
