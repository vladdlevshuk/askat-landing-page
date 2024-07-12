import React from 'react'
import { motion } from 'framer-motion';

const Popup = ({ onClose }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className='fixed bottom-4 sm:right-4 sm:bottom-4 left-auto sm:top-auto right-0 sm:mx-0 max-w-96 bg-white bg-opacity-80 p-6 rounded-3xl shadow-lg flex items-center z-50 mx-4'
    >
      <div className='relative mx-auto w-full'>
        <button
          onClick={onClose}
          className='absolute -top-3 right-0 text-gray-500 lg:hover:text-brandPrimary transition-all duration-300 text-2xl'
        >
          &times;
        </button>
        <div className='flex flex-col justify-center text-center'>
          <p className='lg:text-md text-sm text-neutralGrey mb-3'>TEXT TEXT TEXT TEXT</p>
          <h2 className='lg:text-xl text-lg mx-auto text-neutralDGrey lg:max-w-5xl font-semibold lg:leading-snug mb-3'>
            Text text text text <span className='text-brandPrimary'>text</span> text text text text text text text
          </h2>
          <p className='lg:text-md text-md text-neutralGrey mb-3'>Text text text text text text text text</p>
          <div className='flex justify-center lg:gap-4 gap-2 mb-3'>
            <button
              className='bg-brandPrimary lg:text-md text-sm text-white py-2 px-2 md:px-4 transition-all duration-300 rounded-3xl lg:hover:bg-neutralDGrey cursor-pointer'
              onClick={onClose}
            >
              Text
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
          <p className='lg:text-xs text-xs text-neutralGrey'>Тариф PRO 14 дней бесплатно</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Popup