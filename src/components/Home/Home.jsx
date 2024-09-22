import React, { useState } from 'react';
import banner1 from '../../assets/img/home/banner.png';
import '../../App.css';
import './Home.css';
import Modal from '../RequestModal/RequestModal.jsx';
import { FaChevronDown } from 'react-icons/fa';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-neutralSilver home-wrap mt-20 mx-auto' id='home'>
      <div className='lg:px-5 px-5 pb-12 pt-12 md:pt-0 max-w-screen-2xl mx-auto container' style={{ height: '92vh', maxWidth: '1440px', position: 'relative' }}>
        <div className="md:py-24 flex flex-col-reverse lg:flex-row-reverse items-center justify-between">
        <div className='w-full flex justify-center lg:block'>
          <img
            src={banner1}
            alt="Banner"
            className='lg:w-full md:w-3/4 md:mt-2 mt-12 h-auto'
          />
        </div>
          {/* hero text */}
          <div className='lg:text-left md:text-center text-left md:block flex flex-col items-start'>
            <h1 className='hero-title text-3xl mx-auto xl:text-5xl md:text-4xl font-semibold mb-4 text-neutralDGrey md:leading-3' style={{ maxWidth: '650px' }}>
              Интегратор
              <span className='text-brandPrimary leading-snug'> RetailCRM</span> для
              <span className='text-brandPrimary md:leading-snug'> eCommerce</span>,
              ритейла и <span className='text-brandPrimary leading-snug'> HoReCa</span>
            </h1>
            <p className='text-neutralGrey text-lg md:leading-8 leading-6 mb-8 mx-auto lg:mx-0'>
              Ведем ваш бизнес к успеху через автоматизацию
              продаж и маркетинга для eCommerce, Ритейла и HoReCa
            </p>
            <div className='flex lg:justify-start justify-center'>
              <button className='btn-primary' onClick={openModal}>Получить консультацию</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <FaChevronDown className="text-neutralGrey text-3xl animate-bounce" />
        </div>
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
}

export default Home;