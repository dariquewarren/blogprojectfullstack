import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes as Switch, Route} from 'react-router-dom'
import { db, writeUserData, addNewArticle, getArticlesByType} from './Firebase'
import CreateArticle from './CreateArticle'
import Header from './Header';
import Homepage from './Homepage'
import Footer from './Footer'
import ViewDrafts from './ViewDrafts';
import ReadDraft from './ReadDraft'
import ReadArticle from './ReadArticle';
import ReadPublished from './ReadPublished';

import ViewPublished from './ViewPublished';
import AuthPage from './AuthPage';
function App() {
  const [userInfo, setUserInfo] = useState(undefined)
  const [articleAuthor, setAuthor] = useState('Darique Tester')
  const [trueArray, setTrueArray] = useState([])
  const [publishedArray, setPublishedArray] = useState([])

const testArticle = {
  author: 'this is just a test. delete me before release'
}


  const dummyArticleArray =[ {
    id: 123956792,
    title: 'dummy title',
    subtitle: 'dummy blurb straight from the nerd, ya heard',
    article: 'if you take the a train, youll find its the quickest way to harlem. imagine a \
    little boy, maybe five, maybe four. riding around with his mother listening to the radio\
    then a song comeson , and him not far from being born, doesnt know the difference between right, or wrong. now i aint\
    tryna make this, too complex, but lets imagine tha shorty has an undeveloped complex about the perception of women\
    these days, his mama sings along, and tis what she say...',
    image: logo,
    author: 'Darique D Warren',
    datePublished: '11/17/2021', 
    type: 'published'
    
  }, {
    id: 743156792,
    title: 'dummy title',
    subtitle: 'dummy blurb straight from the nerd, ya heard',
    article: 'if you take the a train, youll find its the quickest way to harlem. imagine a \
    little boy, maybe five, maybe four. riding around with his mother listening to the radio\
    then a song comeson , and him not far from being born, doesnt know the difference between right, or wrong. now i aint\
    tryna make this, too complex, but lets imagine tha shorty has an undeveloped complex about the perception of women\
    these days, his mama sings along, and tis what she say...',
    image: logo,
    author: 'Darique D Warren',
    datePublished: '11/17/2021',
    type: 'draft'
    
  }, {
    id: 12306792,
    title: 'dummy title',
    subtitle: 'dummy blurb straight from the nerd, ya heard',
    article: 'if you take the a train, youll find its the quickest way to harlem. imagine a \
    little boy, maybe five, maybe four. riding around with his mother listening to the radio\
    then a song comeson , and him not far from being born, doesnt know the difference between right, or wrong. now i aint\
    tryna make this, too complex, but lets imagine tha shorty has an undeveloped complex about the perception of women\
    these days, his mama sings along, and tis what she say...',
    image: logo,
    author: 'Darique D Warren',
    datePublished: '11/17/2021', 
    type: 'published'
    
  },]

 

  useEffect(()=>{
    fetch('/published/all').then((response)=>{
      return response.json()
    }).then((data)=>{
      setTrueArray(data.realData)
      setPublishedArray(data.realData)
  return 
    })
  }, [])
  
  return (
    <BrowserRouter  >

    <Header/>
   
    <Switch  >

    <Route exact path='/' element={<Homepage  publishedArray={publishedArray} trueArray={trueArray} author={articleAuthor} />}/>

    <Route exact path='/write' element={<CreateArticle articleAuthor={articleAuthor} />}/>
    
    <Route exact path='/all/drafts' element={<ViewDrafts articleAuthor={articleAuthor}/>}/>
    <Route exact path='/read/draft/:id' element={<ReadDraft articleAuthor={articleAuthor}/>}/>
    
    <Route exact path='/homepage' element={<Homepage articleArray={dummyArticleArray} trueArray={trueArray} author={articleAuthor} />}/>
    
    <Route exact path='/all/published' element={<ViewPublished articleAuthor={articleAuthor}/>}/>

    <Route exact path='/read/published/:id' element={<ReadPublished publishedArray={publishedArray} articleAuthor={articleAuthor}/>}/>
       
   
    </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
