import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants.js';
import presentIcon from '../../assets/img/promo/button-present.png';
import SignupModal from '../SignupModal.jsx'; // Импортируем модалку
import './Promo.css';

const Promo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      id='about'
      variants={fadeIn("", 0.1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.4 }}
      className='bg-neutralSilver promo-wrap'
    >
      <div className='px-4 lg:px-14 py-16 md:py-20 max-w-screen-2xl mx-auto'>
        <div className='mx-auto flex flex-col lg:justify-between lg:flex-row'>
          <div className='text-content mb-8 lg:mb-0'>
            <h2 className='text-center lg:text-left text-3xl md:text-4xl text-neutralDGrey font-semibold mb-4 flex flex-col'>
              <div className='mb-4'>ДАВАЙТЕ ПРЕВРАТИМ</div>
              <div className='text-brandPrimary font-bold text-4xl md:text-5xl mb-4'>ИДЕЮ</div>
              <div className='mb-4'>В</div>
              <div className='text-brandPrimary font-bold text-4xl md:text-5xl mb-4'>РЕАЛЬНОСТЬ</div>
            </h2>
            <p className='text-center mx-auto lg:text-left text-base max-w-2xl'>
              Свяжитесь с нами сегодня, чтобы узнать больше о том, как наши услуги могут помочь вашему бизнесу расти и преуспевать в Интернете
            </p>
          </div>
          <button 
            className="relative bg-brandPrimary text-white h-14 my-auto rounded-full px-6 py-3 flex items-center max-w-96 lg:mx-0 mx-auto lg:right-24 right-0 transition duration-300 ease-in-out transform lg:hover:bg-blue-600 lg:hover:shadow-lg lg:group"
            onClick={openModal}
          >
            <span className="mr-12">Получить бесплатное предложение</span>
            <span className="absolute right-0 w-12 h-12 bg-white rounded-full flex-shrink-0 mr-1 p-3 transition-transform duration-300 ease-in-out transform group-hover:scale-110">
              <img src={presentIcon} alt="Present Icon" width={25} height={25}/>
            </span>
          </button>
        </div>
      </div>

      {/* Модальное окно */}
      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
    </motion.div>
  );
};

export default Promo;
