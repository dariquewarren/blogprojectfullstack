import React, {useState, useEffect, lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter , Routes as Switch, Route} from 'react-router-dom'
import Loading from './Loading';

import { getArticlesByType} from './Firebase'
import { getAuth, browserLocalPersistence,setPersistence, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const SearchOptions = lazy(()=>import('./SearchOptions'))

const CreateArticle = lazy(()=>import('./CreateArticle'))
const Header = lazy(()=>import('./Header'))
const Homepage = lazy(()=>import('./Homepage'))
const Footer = lazy(()=>import('./Footer'))
const ViewDrafts = lazy(()=>import('./ViewDrafts'))
const ViewPublished = lazy(()=>import('./ViewPublished'))
const ReadPublished = lazy(()=>import('./ReadPublished'))
const SignupForm = lazy(()=>import('./authComponents/SignupForm'))
const LoginForm = lazy(()=>import('./authComponents/LoginForm'))
const UpdateProfile = lazy(()=>import('./authComponents/UpdateProfile'))

function App() {

  var theCurrentAuthor =  (auth.currentUser) ?auth.currentUser.displayName : 'darique tester'
  const [lightMode, toggleLightMode] = useState(false)

  const [categorySelected, setCategorySelected] = useState(false)
  const [showSearch, toggleSearch] = useState(false)
  const [searchLocation, setSearchLocation] = useState(undefined)
  const [filterMessage, setFilterMessage] = useState('')
  const [trueArray, setTrueArray] = useState([])
  const [publishedArray, setPublishedArray] = useState([])
  const [draftsArray, setDraftsArray] = useState([])
  const [categoryArray, setCategoryArray] = useState([])

 

const categoryMap = async(array)=>{
  
  const changedArray = array.map((m)=>{
      return m.category
  })
  const flatArray = await changedArray.flat()
  const setArray =  [...new Set(flatArray)]
  console.log(`flatArray`, flatArray)
  console.log(`setArray`, setArray)
  console.log(`changedArray`, changedArray)
  
  setCategoryArray(setArray)
  }
  const handlePublishedArray = async ()=>{
    await Promise.resolve(getArticlesByType(`${theCurrentAuthor}`, 'published')).then((data)=>{
          setPublishedArray(data)
          setTrueArray(data)
      categoryMap(data)

          })
  }
const handleDraftsArray = async ()=>{
  await Promise.resolve(getArticlesByType(`${theCurrentAuthor}`, 'drafts')).then((data)=>{
    setDraftsArray(data)
    console.log('drafts array', data)
    })
}
  const lightModeStyle = {backgroundColor:"#212121", color: 'whitesmoke'}
  const darkModeStyle = {backgroundColor:"whitesmoke", color: '#212121'}

  useEffect(()=>{
   if(trueArray.length < 1){
    handlePublishedArray()
    handleDraftsArray()
    console.log('currentUser', auth.currentUser)
   }else{
    console.log('true array already exists')
    console.log('currentUser', auth.currentUser)

    return 
   }
  }, [ trueArray.length, auth.currentUser])
  
  return (
    <div style={(lightMode)? lightModeStyle : darkModeStyle }>
  <Suspense fallback={<Loading/>} >

    <BrowserRouter  >

    <Header author={theCurrentAuthor} user={auth.currentUser} showSearch={showSearch} toggleSearch={toggleSearch}
    toggleLightMode={toggleLightMode} lightMode={lightMode}
    lightModeStyle={lightModeStyle} darkModeStyle={darkModeStyle}
    searchLocation={searchLocation} setSearchLocation={setSearchLocation} filterMessage={filterMessage} setFilterMessage={setFilterMessage}
    setCategorySelected={setCategorySelected} trueArray={trueArray} setPublishedArray={setPublishedArray} categoryArray={categoryArray} />
   
   
    <Switch  >

    <Route exact path='/' element={<Homepage 
      searchLocation={searchLocation} setSearchLocation={setSearchLocation} filterMessage={filterMessage} setFilterMessage={setFilterMessage}
      categorySelected={categorySelected} setCategorySelected={setCategorySelected} 
    publishedArray={publishedArray} showSearch={showSearch} 
    toggleSearch={toggleSearch} categoryArray={categoryArray} setCategoryArray={setCategoryArray}
    trueArray={trueArray} author={theCurrentAuthor} />}/>
    
    <Route exact path='/homepage' element={<Homepage 
      searchLocation={searchLocation} setSearchLocation={setSearchLocation} filterMessage={filterMessage} setFilterMessage={setFilterMessage}
      trueArray={trueArray} author={theCurrentAuthor} showSearch={showSearch} toggleSearch={toggleSearch} />}/>
    

    <Route exact path='/updateProfile' element={<UpdateProfile user={auth.currentUser} />}/>

    <Route exact path='/all/drafts' element={<ViewDrafts   
          articleAuthor={theCurrentAuthor}    trueArray={trueArray}
    setTrueArray={setTrueArray}    draftsArray={draftsArray}
    setDraftsArray={setDraftsArray}/>}/>
    
  

    <Route exact path='/read/published/:id' 
    element={<ReadPublished publishedArray={publishedArray} articleAuthor={theCurrentAuthor}/>}/>
  
  
    <Route exact path='/signup' 
    element={<SignupForm user={auth.currentUser} />}/>
    <Route exact path='/login' 
    element={<LoginForm   />}/>
    <Route exact path='/search' element={<SearchOptions array={publishedArray} />}/>
    <Route exact path='/write' element={<CreateArticle articleAuthor={theCurrentAuthor} />}/>


    <Route exact path='/all/published' element= {<ViewPublished 
      articleAuthor={theCurrentAuthor}    trueArray={trueArray}
    setTrueArray={setTrueArray}    publishedArray={publishedArray}
    setPublishedArray={setPublishedArray}    />}
    />
    </Switch>

    <Footer/>
    </BrowserRouter>
    </Suspense>
</div>
  );
}

export default App;
