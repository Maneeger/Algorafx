import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import './App.css'
import Hero from './components/Hero.jsx';

function App() {


  return (
    <>
     <Navbar />
     <Hero/>
    </>
  )
}

export default App
