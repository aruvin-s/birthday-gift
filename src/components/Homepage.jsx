import React, { useState } from "react";
import bgImage from '../assets/images/bghome2.png';
import ReactAudioPlayer from 'react-audio-player';
import nina from ".././assets/audio/nina.m4a";

const Homepage = () => {
  const [playAudio, setPlayAudio] = useState(false);

  const handlePlayAudio = () => {
    setPlayAudio(true);
  };

  return (
    
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      className="flex flex-col justify-between"
    >
     {playAudio && (
        <ReactAudioPlayer
          src={nina}
          autoPlay
          loop
          controls={false} // Hide controls
        />
      )}
      <div className='px-[60px] pt-[48px] pb-[92px]'>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-yellow-400 font-nacelle">
            HAI SAYANG
          </h1>
          <h1 className="text-3xl font-bold text-yellow-400 font-nacelle">
            A LITTLE GIFT FOR YOU
          </h1>
          <button className="text-3xl font-bold text-yellow-400 font-nacelle" onClick={handlePlayAudio}>
            KLIK DISINI DULU
          </button>
        </div>
      </div>

      <div className='px-[60px] pb-[32px]'>
        <div>
          <div className="text-white font-signature text-[40px]">
            dari pacarmu yang <br /> jauh disana
          </div>
          <div className="text-[72px] font-bold text-yellow-400 font-nacelle">
            HAPPIEST BIRTHDAY,
          </div>
          <div className="text-white font-signature text-[40px] absolute top-[533px] left-[440px]">
            selamat ulang tahun
          </div>
          <div className="text-[72px] font-bold text-yellow-400 font-nacelle">
            ANDIEN RACHMA FADHILLAH
          </div>
          <div className="text-white font-signature text-[40px] absolute top-[640px] left-[930px]">
            pacarku sayang!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
