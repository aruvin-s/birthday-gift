import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Homepage.jsx'
import Wish from './components/Wish.jsx'
import Special from './components/Special.jsx'
import Memory from './components/Memory.jsx'
import Gallery from './components/Gallery.jsx'
import Goodbye from './components/Goodbye.jsx'
import './font.css';
import './App.css'
import React, { useState, useRef, useEffect } from 'react';

function App() {

  return (
    <>
      <div>
        <Home />
        <Wish />
        <Special />
        <Memory />
        <Gallery />
        <Goodbye />
      </div>
    </>
  )
}

export default App
