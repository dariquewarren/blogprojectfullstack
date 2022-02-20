import React, {useState, useEffect, lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter , Routes as Switch, Route} from 'react-router-dom'
import Loading from './Loading';
import {addArticle, getArticlesByType} from './Firebase'

const CreateArticle = lazy(()=>import('./CreateArticle'))
const Header = lazy(()=>import('./Header'))
const Homepage = lazy(()=>import('./Homepage'))
const Footer = lazy(()=>import('./Footer'))
const ViewDrafts = lazy(()=>import('./ViewDrafts'))
const ViewPublished = lazy(()=>import('./ViewPublished'))
const ReadPublished = lazy(()=>import('./ReadPublished'))


function App() {
  const [lightMode, toggleLightMode] = useState(false)

  const [articleAuthor, setAuthor] = useState('Darique Tester')
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
  const setArray = await [...new Set(flatArray)]
  console.log(`flatArray`, flatArray)
  console.log(`setArray`, setArray)
  console.log(`changedArray`, changedArray)
  
  setCategoryArray(setArray)
  }
  const handlePublishedArray = async ()=>{
    await Promise.resolve(getArticlesByType('Darique Tester', 'published')).then((data)=>{
          setPublishedArray(data)
          setTrueArray(data)
      categoryMap(data)

          })
  }
const handleDraftsArray = async ()=>{
  await Promise.resolve(getArticlesByType('Darique Tester', 'drafts')).then((data)=>{
    setDraftsArray(data)
    
    })
}
  const lightModeStyle = {backgroundColor:"#212121", color: 'whitesmoke'}
  const darkModeStyle = {backgroundColor:"whitesmoke", color: '#212121'}

  useEffect(()=>{
   if(trueArray.length < 1){
    handlePublishedArray()
    handleDraftsArray()
    
   }else{
    console.log('true array already exists')

    return 
   }
  }, [ trueArray.length])
  
  return (
    <div style={(lightMode)? lightModeStyle : darkModeStyle }>
  <Suspense fallback={<Loading/>} >

    <BrowserRouter  >

    <Header showSearch={showSearch} toggleSearch={toggleSearch}
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
    trueArray={trueArray} author={articleAuthor} />}/>

    <Route exact path='/write' element={<CreateArticle articleAuthor={articleAuthor} />}/>
    
    <Route exact path='/all/drafts' element={<ViewDrafts   
          articleAuthor={articleAuthor}    trueArray={trueArray}
    setTrueArray={setTrueArray}    draftsArray={draftsArray}
    setDraftsArray={setDraftsArray}/>}/>
    
    <Route exact path='/homepage' element={<Homepage 
      searchLocation={searchLocation} setSearchLocation={setSearchLocation} filterMessage={filterMessage} setFilterMessage={setFilterMessage}
      trueArray={trueArray} author={articleAuthor} showSearch={showSearch} toggleSearch={toggleSearch} />}/>
    
    <Route exact path='/all/published' element= {<ViewPublished 
      articleAuthor={articleAuthor}    trueArray={trueArray}
    setTrueArray={setTrueArray}    publishedArray={publishedArray}
    setPublishedArray={setPublishedArray}    />}/>

    <Route exact path='/read/published/:id' 
    element={<ReadPublished publishedArray={publishedArray} articleAuthor={articleAuthor}/>}/>
  
    </Switch>
    <Footer/>
    </BrowserRouter>
    </Suspense>
</div>
  );
}

export default App;
