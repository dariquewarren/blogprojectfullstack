import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container'
import Article from './Article'
import { getSinglePublished } from './APICalls';

function ReadArticle(props) {

    const objectArray = [{author: 'MR. Mister'}]
 const {id} = useParams()

 const [article, setArticle] = useState()
    

 useEffect(()=>{
 if(!article){
    getSinglePublished(id).then((data)=>{
        return data.json()
    }).then((data)=>{
        if(!data.data || data.data.article === undefined ){
            return  alert(data.message)  
            }else{
                console.log()
             return setArticle(data.data)
 
            }
    })
 }else {
     return
 }
 }, [article])


    return (
        <Container>
        <button
        onClick={()=>{
            console.log('article', article)     
           }}
        >
        test button
        </button>
            <Article {...article} />
        </Container>
    )
}
export default ReadArticle
