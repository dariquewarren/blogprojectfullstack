import React, {useState, useEffect, lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes as Switch, Route} from 'react-router-dom'
import { db, writeUserData, addNewArticle, getArticlesByType} from './Firebase'
import AuthPage from './AuthPage';
import Loading from './Loading';

const CreateArticle = lazy(()=>import('./CreateArticle'))
const Header = lazy(()=>import('./Header'))
const Homepage = lazy(()=>import('./Homepage'))
const Footer = lazy(()=>import('./Footer'))
const ViewDrafts = lazy(()=>import('./ViewDrafts'))
const ReadDraft = lazy(()=>import('./ReadDraft'))
const ReadArticle = lazy(()=>import('./ReadArticle'))
const ViewPublished = lazy(()=>import('./ViewPublished'))
const ReadPublished = lazy(()=>import('./ReadPublished'))


function App() {
  const [userInfo, setUserInfo] = useState(undefined)
  const [articleAuthor, setAuthor] = useState('Darique Tester')
  const [categorySelected, setCategorySelected] = useState(false)

  const [trueArray, setTrueArray] = useState([])
  const [publishedArray, setPublishedArray] = useState([])
  const [draftsArray, setDraftsArray] = useState([])
  const [categoryArray, setCategoryArray] = useState([])


const handleDraftsArray = ()=>{
  fetch('/published/all').then((response)=>{
    return response.json()
  }).then((data)=>{
    setDraftsArray(data.realData)
    return data.realData
  }).then((data)=>{
    console.log('draftsArray', draftsArray)
  })
}

const categoryMap = async(array)=>{
  
  const changedArray = array.map((m)=>{
      return m.category
  })
  const flatArray = await changedArray.flat()
  const setArray = [...new Set(flatArray)]
  console.log(`flatArray`, flatArray)
  console.log(`setArray`, setArray)
  console.log(`changedArray`, changedArray)
  
  setCategoryArray(setArray)
  }

  useEffect(()=>{
   if(trueArray.length < 1){
    fetch('/published/all').then((response)=>{
      return response.json()
    }).then((data)=>{
      setTrueArray(data.realData)
      setPublishedArray(data.realData)
 return data.realData
    }).then((data)=>{
      handleDraftsArray()
      categoryMap(data)
    })
   }else{
    console.log('true array already exists')

    return 
   }
  }, [ draftsArray, publishedArray])
  
  return (
    <div style={{backgroundColor:"#93a9d4"}}>
  <Suspense fallback={<Loading/>} >

    <BrowserRouter  >

    <Header setCategorySelected={setCategorySelected} trueArray={trueArray} setPublishedArray={setPublishedArray} categoryArray={categoryArray} trueArray={trueArray}/>
   
    <Switch  >

    <Route exact path='/' element={<Homepage categorySelected={categorySelected} setCategorySelected={setCategorySelected} publishedArray={publishedArray} trueArray={trueArray} author={articleAuthor} />}/>

    <Route exact path='/write' element={<CreateArticle articleAuthor={articleAuthor} />}/>
    
    <Route exact path='/all/drafts' element={<ViewDrafts articleAuthor={articleAuthor}/>}/>
    <Route exact path='/read/draft/:id' element={<ReadDraft articleAuthor={articleAuthor}/>}/>
    
    <Route exact path='/homepage' element={<Homepage trueArray={trueArray} author={articleAuthor} />}/>
    
    <Route exact path='/all/published' element= {<ViewPublished articleAuthor={articleAuthor}
    trueArray={trueArray}
    setTrueArray={setTrueArray}
    publishedArray={publishedArray}
    setPublishedArray={setPublishedArray}
    />}/>

    <Route exact path='/read/published/:id' element={<ReadPublished publishedArray={publishedArray} articleAuthor={articleAuthor}/>}/>
  
    </Switch>
    <Footer/>
    </BrowserRouter>
    </Suspense>
</div>
  );
}

export default App;
