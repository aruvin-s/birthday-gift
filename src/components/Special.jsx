import React from "react";
import image from '../assets/images/best.png';

const Special = () => {
  return (
    <div className="bg-yellow-400 min-h-screen">
      <div className="py-[200px] grid gap-y-[200px] opacity-25">
        <div className="bg-black w-full h-[6px]"></div>
        <div className="bg-black w-full h-[6px]"></div>
        <div className="bg-black w-full h-[6px]"></div>
        <div className="bg-black w-full h-[6px]"></div>
      </div>
      <div className="grid gap-y-[102px] absolute top-[2010px] px-[60px] w-full">
        <div className="text-[72px] font-bold text-black font-nacelle">
          AKU SAYANG KAMU
        </div>
        <div className="text-[72px] font-bold text-black font-nacelle opacity-25">
          I LOVE YOU!
        </div>
        <div className="flex items-center">
        <div className="text-[32px] font-bold text-black font-nacelle rotate-90">
            2023
          </div>
          <div className="text-[72px] font-bold text-black font-nacelle ps-[320px]">
            愛してる!
          </div>
        </div>
        <div className="flex items-center">
        <div className="text-[32px] font-bold text-black font-nacelle rotate-90 opacity-25">
            2023
          </div>
          <div className="text-[72px] font-bold text-black font-nacelle opacity-25 ps-[320px]">
            사랑해요!
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[72px] font-bold text-black font-nacelle">
            ICH LIEBE DICH!
          </div>
          <div className="text-[32px] font-bold text-black font-nacelle rotate-90">
            2024
          </div>
        </div>
      </div>
      <div className="absolute top-[2200px] left-[800px]">
        <img src={image} />
      </div>
    </div>
  );
};

export default Special;
