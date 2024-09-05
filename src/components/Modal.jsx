import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div
        className="bg-white p-6 rounded-lg max-w-4xl w-full relative animate-modalFadeIn"
        style={{ animationDuration: '0.5s', animationTimingFunction: 'ease-out' }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-2xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
