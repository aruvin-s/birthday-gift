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
import ReactAudioPlayer from 'react-audio-player';
import nina from "./assets/audio/nina.m4a";
import React, { useState, useRef, useEffect } from 'react';

function App() {

  const [hasScrolled, setHasScrolled] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        if (audioRef.current) {
          audioRef.current.play();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  return (
    <>
      <div>
      <ReactAudioPlayer
          ref={audioRef}
          src={nina}
          autoPlay
          loop
          controls={false} // Hide controls
        />
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
