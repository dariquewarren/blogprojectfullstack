import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {getAllPublished} from './APICalls'
import ArticleCard from './ArticleCard'
const SuggestedArticles = (props) =>{
    const [suggestedArray, setSuggestedArray] = useState(false)
    const [index1, setIndex1] =useState()
    const [index2, setIndex2] =useState()
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
    useEffect(()=>{
       
            fetch('/published/all').then((response)=>{
                return response.json()
               }).then((data)=>{
                   if(!data.realData || data.realData[0] === undefined ){
                   return  data.realData  
                   }else{
                     
        
                    console.log(data)
                    setSuggestedArray(data.realData)
                    handleRandomNumbers(data.realData)
                    return data.realData
        
                   }
           
            })
            
        
        }, [])
    return (
       <div style={{outline:'2px solid red' ,width:'100%', marginTop:'8rem', backgroundColor: 'grey'}}>
       <h4 style={{textAlign: 'center'}}>Check these out too</h4>
       <div style={{display:'flex', flexDirection: 'row', marginTop: '5rem'}}>
    
      
       
       {(suggestedArray !== false)?suggestedArray.map((m)=>{
           if(suggestedArray.indexOf(m) === index1 || suggestedArray.indexOf(m) === index2){
               return (
                   <ArticleCard  key={m.id} displayType={'suggested'} {...m}/>
               )
           }else{
               return
           }
       }):<p></p>}
    
       </div>
       </div>
    )
}

export default SuggestedArticles
