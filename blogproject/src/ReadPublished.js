import React, {useState, useEffect} from 'react'
import 'react-quill/dist/quill.snow.css';// css
import { useParams } from "react-router-dom";
import Article from './Article'
import Loading from './Loading';
import SuggestedArticles from './SuggestedArticles';


function ReadPublished(props) {

 const {id} = useParams()

const [article, setArticle] = useState()
const [index1, setIndex1] =useState(false)
const [index2, setIndex2] =useState(false)

const handleRandomNumbers = (arr)=>{
const baseNumber = arr.length
var randomNumber1 = Math.floor(Math.random() * (baseNumber))
var randomNumber2 = Math.floor(Math.random() * (baseNumber ))
if(randomNumber1 === randomNumber2){
setIndex1(0)
setIndex2(baseNumber - 1)
}else{
setIndex1(randomNumber1)
setIndex2(randomNumber2)
}
console.log('randomNumber1', randomNumber1)
console.log('randomNumber2', randomNumber2)
}



const handleSingleArticle= async (identification, array)=>{
    var theArticle =[]
    var realArray = await array
    realArray.map((m)=>{
  if(m.id === identification){
    theArticle.push(m)
    console.log(m)
        return 
  }else{
    return
  }
  
  })
  
  console.log('theArticle', theArticle) 
  setArticle(theArticle)
   return theArticle
   }

 useEffect(()=>{
    handleSingleArticle(id,props.publishedArray)
    handleRandomNumbers(props.publishedArray)
}, [props.publishedArray, id])


    return (
        <div style={{height: 'auto'}}>

       {(article) 
        ?
        <div>
        <Article {...article[0]} />
        <SuggestedArticles article1={props.publishedArray[index1]} article2={props.publishedArray[index2]}/>

        </div> 
        : <Loading/>}
        </div>
    )
}

export default ReadPublished
