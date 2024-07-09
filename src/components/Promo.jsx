import React, { useState } from 'react';
import aboutImg from '../assets/about.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Modal from './RequestModal/RequestModal.jsx';

const Promo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <motion.div
      id='about'
      variants={fadeIn("", 0.1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.4 }}
      className='bg-neutralSilver'
    >
      <div className='px-4 lg:px-14 py-16 md:py-20 max-w-screen-2xl mx-auto'>
        <div className='md:w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div className='hidden lg:block' style={{maxWidth: '500px'}}>
            <img src={aboutImg} alt="About Image"/>
          </div>
          <div className='lg:w-3/5 mx-auto flex flex-col'>
            <h2 className='mx-auto text-center lg:mx-0 lg:text-left text-3xl md:text-5xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Давайте превратим идею в реальность</h2>
            <p className='mx-auto text-center lg:mx-0 lg:text-left md:w-3/4 text-xl text-neutralGrey mb-8'>Свяжитесь с нами сегодня, чтобы узнать больше о том, как наши услуги
            могут помочь вашему бизнесу расти и преуспевать в Интернете</p>
            <button onClick={openModal} className='mx-auto lg:mx-0 btn-primary max-w-sm lg:max-w-md'>Получить бесплатное предложение</button>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.div>
  );
};

export default Promo;
