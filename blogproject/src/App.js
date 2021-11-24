import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import { db, writeUserData, addNewArticle, getArticlesByType} from './Firebase'
import { apiObject } from './APICalls';
import CreateArticle from './CreateArticle'
import Header from './Header';
import Homepage from './Homepage'
import ViewArticle from './ViewArticle';

function App() {
  const [articleAuthor, setAuthor] = useState('Darique Tester')
  const [trueArray, settrueArray] = useState([])
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

  const handleRetrieveData = async (type, author)=>{
    
  Promise.resolve(getArticlesByType(type, author)).then((data)=>{
    console.log('retrievedFromFn', data)
    settrueArray(data)
    return data
  })

  }

  
  return (
    <Router>

    <Header/>
   
    <Switch>

    <Route exact path='/' element={<Homepage articleArray={dummyArticleArray} trueArray={trueArray} handleRetrieveData={handleRetrieveData} author={articleAuthor} />}/>
    <Route exact path='/create' element={<CreateArticle articleAuthor={articleAuthor} />}/>
    <Route exact path='/view/:id' element={<ViewArticle articleArray={dummyArticleArray} />} />

    
   
    </Switch>
    </Router>
  );
}

export default App;
