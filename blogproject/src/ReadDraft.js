import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container'
import Article from './Article'
import { getSingleDraft } from './APICalls';
import Loading from './Loading';
function ReadDraft(props) {

    const objectArray = [{author: 'MR. Mister'}]
 const {id} = useParams()

 const [draft, setDraft] = useState()
    

 useEffect(()=>{
 if(!draft){
    getSingleDraft(id).then((data)=>{
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
        {(draft)?
    <Article {...draft} />
        :
    <Loading/>
        }
        </Container>
    )
}

export default ReadDraft
