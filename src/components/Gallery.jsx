import React from "react";
import photo1 from '../assets/images/foto1.png';
import photo2 from '../assets/images/foto2.png';
import photo3 from '../assets/images/foto3.png';
import text from '../assets/images/gallery.png';

const Gallery = () => {
  return (
    <div className="bg-white min-h-screen border-t-4 mt-[92px] flex flex-col items-center">
      <img className="size-3/4 pt-[92px]" src={text}/>
      <div className="flex gap-4 pt-[41px]">
        <div>
            <img src={photo1} />
        </div>
        <div>
            <img src={photo2} />
        </div>
        <div>
            <img src={photo3} />
        </div>
      </div>
      <div className="text-[32px] tracking-[10px] font-bold text-black font-nacelle pt-[80px] text-center">
        FILLED WITH EVERY PICTURE OF YOU!
      </div>
      <div className="bg-black w-[800px] h-[3px] mt-[20px] opacity-25"></div>
    </div>
  );
};

export default Gallery;
