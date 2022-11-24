import React, { useState, useEffect } from "react";
import Imageload from "./components/Imageload";
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Profile from './components/pages/Profile'
import Navbar from './layout/Navbar';
import Footer from "./layout/Footer";
import {  BrowserRouter,
  Route,
  Routes} from 'react-router-dom';



function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar />
       <Routes>
       <Route exact path="/" element={<Imageload />}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
       <Route exact path="/profile" element={<Profile/>}/>
       </Routes>
      <Footer />
       </div>
   
   
      </BrowserRouter>
   
  );
}

export default App;
