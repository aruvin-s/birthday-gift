import React, { useState } from "react";
import ImageAtas from '../assets/images/imgatas.png';
import ImageBawah from '../assets/images/imgbawah.png';
import Modal from './Modal';

const Wish = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="flex justify-between px-[60px] pt-[60px] pb-[92px]">
        <div>
          <div className="text-[72px] font-bold text-yellow-400 font-nacelle absolute top-[792px]">
            SEMOGA SELALU <br /> BAHAGIA, YA?
          </div>
          <div className="font-signature text-[40px] pt-[180px]">
            pacarku sayang!
          </div>
        </div>
        <div>
          <img src={ImageAtas} />
        </div>
      </div>

      <div className="flex flex-col items-center px-[60px] pt-[48px] pb-[92px]">
        <button
          onClick={openModal}
          className="text-black font-nacelle text-[32px] tracking-[20px] bg-yellow-400 py-2 px-4 items-center"
        >
          CLICK HERE FOR MORE
        </button>
      </div>

      <div className="flex justify-between px-[60px] pt-[48px] pb-[92px]">
        <div>
          <img src={ImageBawah} />
        </div>
        <div>
          <div className="text-[72px] text-right font-bold text-yellow-400 font-nacelle absolute top-[1600px] right-[55px]">
            SEMOGA HAL - HAL <br /> BAIK SELALU MENYERTAIMU
          </div>
          <div className="font-signature text-[40px] pt-[300px]">
            my one and only
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="text-center">
          <h2 className="text-black font-nacelle text-[64px]">Happy birthday, love🤎</h2>
          <p className="text-black font-nacellesemi text-[24px]">
            Selamat ulang tahun yaaa kesayangan akuu! Mohon maaf di ulang tahun kali ini aku belum bisa ketemu dan nyamperin kamu
            secara langsung seperti kamu dulu nyamperin akuu, sebagai gantinyaa aku mau ucapin sedikit lewat website ini ke kamu,
            mohon maaf banget kalau simple aku udah lama ga ngoding jadi aku tidak bisa bikin animasi yang rumit rumit, semoga ini
            ga ngurangi kesan apapun di ulang tahun kamu yaa, sekali lagi happy birthdayy, aku sayang kamu💖
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Wish;
