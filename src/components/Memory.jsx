import React from "react";
import pic1 from '../assets/images/laugh1.png';
import pic2 from '../assets/images/laugh2.png';

const Memory = () => {
  return (
    <div className="bg-white min-h-screen">
        <div className="flex justify-between px-[60px] pt-[92px] pb-[330px]">
            <div className="text-[72px] font-bold text-yellow-400 font-nacelle">
                SATU HAL YANG GAK <br /> PERNAH BERUBAH
            </div>
            <div className="text-[32px] font-bold text-black font-nacelle pt-[20px]">
                2023
            </div>
        </div>
        <div className="absolute top-[3260px] left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <div>
                <img src={pic1} alt="Laugh 1" />
            </div>
            <div>
                <img src={pic2} alt="Laugh 2" />
            </div>
        </div>
        <div className="flex items-end relative z-10 justify-between px-[60px] pt-[92px]">
            <div className="text-[32px] font-bold text-black font-nacelle pb-[20px]">
                2023
            </div>
            <div className="text-[72px] font-bold text-yellow-400 font-nacelle">
                CENGENGESAN KITA <br />  DARI DAHULU KALA
            </div>
        </div>
    </div>
  );
};

export default Memory;
