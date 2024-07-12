import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Modal from './RequestModal/RequestModal.jsx'; // Adjust the path based on your project structure

const Newsletter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      variants={fadeIn("", 0.1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.4 }}
      className='bg-neutralSilver'
    >
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 md:py-20'>
        <div className='flex flex-col justify-center text-center'>
          <p className='lg:text-xl text-lg text-neutralGrey mb-3'>НАЧНИТЕ ПРЯМО СЕЙЧАС</p>
          <h2 className='md:text-4xl text-3xl mx-auto text-neutralDGrey lg:max-w-3xl font-semibold lg:leading-snug mb-7'>
            Зарегистрируйтесь в <span className='text-brandPrimary'>RetailCRM</span> и развивайте бизнес вместе с нами
          </h2>
          <div className='flex justify-center lg:gap-4 gap-2 mb-4'>
            <button className='bg-brandPrimary lg:text-lg text-md text-white py-2 px-2 md:px-4 transition-all duration-300 rounded-3xl lg:hover:bg-neutralDGrey cursor-pointer' onClick={openModal}>
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
            <button className='bg-neutralSilver lg:text-lg text-md text-neutralGrey py-2 px-2 md:px-4 transition-all duration-300 rounded-3xl lg:hover:text-brandPrimary cursor-pointer' onClick={openModal}>
              Запись на демо
            </button>
          </div>
          <p className='lg:text-md text-sm text-neutralGrey'>Тариф PRO 14 дней бесплатно</p>
        </div>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </motion.div>
  );
};

export default Newsletter;
