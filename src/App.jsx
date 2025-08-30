import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx'
import SignOut from './pages/SignOut.jsx';
import Signin from './pages/Signin.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path ="/sign-out" element={<SignOut/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
       <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>


    

    </Routes>
    </BrowserRouter>
  )
}

export default App
