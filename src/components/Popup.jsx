import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RequestModal from './RequestModal/RequestModal.jsx';

const Popup = ({ onClose }) => {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const handleOpenRequestModal = () => {
    setIsRequestModalOpen(true);
    setIsPopupVisible(false);
  };

  const handleCloseRequestModal = () => {
    setIsRequestModalOpen(false);
  };

  return (
    <>
      {isPopupVisible && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          className='fixed bottom-6 sm:right-4 sm:bottom-4 left-auto sm:top-auto right-0 sm:mx-0 sm:max-w-80 bg-white sm:bg-opacity-80 p-6 rounded-3xl shadow-lg flex items-center z-50 mx-4'
        >
          <div className='relative mx-auto w-full'>
            <button
              onClick={onClose}
              className='absolute -top-3 right-0 text-gray-500 lg:hover:text-brandPrimary transition-all duration-300 text-4xl sm:text-3xl'
            >
              &times;
            </button>
            <div className='flex flex-col justify-center text-center'>
              <p className='text-xs text-neutralGrey mb-3'>CRM СИСТЕМА ДЛЯ БИЗНЕСА</p>
              <h2 className='lg:text-lg text-base mx-auto text-neutralDGrey lg:max-w-5xl font-semibold lg:leading-snug mb-3'>
                Управляйте <span className='text-brandPrimary'>продажами</span>, <span className='text-brandPrimary'>лояльностью</span>, <span className='text-brandPrimary'>чатами</span> и <span className='text-brandPrimary'>рассылками</span> в едином окне
              </h2>
              <p className='lg:text-sm text-xs text-neutralGrey mb-3'>CRM-система для розничной торговли и интернет-магазинов</p>
              <div className='flex justify-center lg:gap-4 gap-2 mb-3'>
                <button
                  className='bg-brandPrimary lg:text-sm text-xs text-white py-2 px-2 md:px-4 transition-all duration-300 rounded-3xl lg:hover:bg-neutralDGrey cursor-pointer'
                  onClick={handleOpenRequestModal}
                >
                  Начать бесплатно
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="inline-block ml-2"
                    style={{ stroke: '#2196F3', strokeWidth: 2 }}
                  >
                    <path
                      d="M1 5.5H16M16 5.5L11.5 1M16 5.5L11.5 10"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p className='text-xs text-neutralGrey'>Тариф PRO 14 дней бесплатно</p>
            </div>
          </div>
        </motion.div>
      )}
      {isRequestModalOpen && <RequestModal isOpen={isRequestModalOpen} onClose={handleCloseRequestModal} />}
    </>
  );
};

export default Popup;
