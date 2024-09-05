import React, { useState } from "react";
import ImageAtas from '../assets/images/imgatas2.png';
import ImageBawah from '../assets/images/imgbawah2.png';
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
        <div>
          <img src={ImageAtas} />
        </div>

      <div className="flex flex-col items-center px-[60px] pt-[48px] pb-[92px]">
        <button
          onClick={openModal}
          className="text-black font-nacelle text-[32px] tracking-[20px] bg-yellow-400 py-2 px-4 items-center"
        >
          CLICK HERE FOR MORE
        </button>
      </div>

      <div>
        <div>
          <img src={ImageBawah} />
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
