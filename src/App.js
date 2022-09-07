import './App.css';

import React, { useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  // const apiKey = process.env.REACT_APP_NEWSMONKEY_API;
  const apiKey = "b5b49ee26edc4e68b6c8cd75b1882425";
  // const apiKey = process.env.REACT_APP_NEWSMONKEY_API;
  const [progress, setprogress] = useState(0)
  // state = {
  //   progress : 0
  // }
  // setprogress=(progress)=>{
  //   this.setState({progress : progress})
  // }
 
  
    return (
      <>
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
       
      />
        <Routes>
          <Route path="/general" element={<News setProgress = {setprogress} apiKey={apiKey} key="general" country='in' pagenumber={9} category='general'/>}></Route>
          <Route path="/entertainment" element={<News setProgress = {setprogress} apiKey={apiKey} key="entertainment"country='in' pagenumber={9} category='entertainment'/>}></Route>
          <Route path="/business" element={<News setProgress = {setprogress} apiKey={apiKey} key="business"country='in' pagenumber={9} category='business'/>}></Route>
          <Route path="/health" element={<News setProgress = {setprogress} apiKey={apiKey} key="health"country='in' pagenumber={9} category='health'/>}></Route>
          <Route path="/science" element={<News setProgress = {setprogress} apiKey={apiKey} key="science"country='in' pagenumber={9} category='science'/>}></Route>
          <Route path="/sports" element={<News setProgress = {setprogress} apiKey={apiKey} key="sports"country='in' pagenumber={9} category='sports'/>}></Route>
          <Route path="/technology" element={<News setProgress = {setprogress} apiKey={apiKey} key="technology"country='in' pagenumber={9} category='technology'/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <News setprogress = {setprogress} apiKey={apiKey} country='in' pagenumber={9} category='entertainment'/> */}
      
      </>
    )
}
export default App;
// Business
// Entertainment
// General
// Health
// Science
// Sports
// Technology
