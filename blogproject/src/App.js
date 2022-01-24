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
  const [trueArray, setTrueArray] = useState([])
  const [publishedArray, setPublishedArray] = useState([])
  
  useEffect(()=>{
   if(trueArray.length < 1){
    fetch('/published/all').then((response)=>{
      return response.json()
    }).then((data)=>{
      setTrueArray(data.realData)
      setPublishedArray(data.realData)
 
    })
   }else{
    return 
    console.log('true array already exists')
   }
  }, [trueArray])
  
  return (
    <div>
  <Suspense fallback={<Loading/>} >

    <BrowserRouter  >

    <Header/>
   
    <Switch  >

    <Route exact path='/' element={<Homepage  publishedArray={publishedArray} trueArray={trueArray} author={articleAuthor} />}/>

    <Route exact path='/write' element={<CreateArticle articleAuthor={articleAuthor} />}/>
    
    <Route exact path='/all/drafts' element={<ViewDrafts articleAuthor={articleAuthor}/>}/>
    <Route exact path='/read/draft/:id' element={<ReadDraft articleAuthor={articleAuthor}/>}/>
    
    <Route exact path='/homepage' element={<Homepage trueArray={trueArray} author={articleAuthor} />}/>
    
    <Route exact path='/all/published' element=
    {<ViewPublished 
      articleAuthor={articleAuthor}
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
