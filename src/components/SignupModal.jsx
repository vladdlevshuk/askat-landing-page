import React, { useEffect, useRef } from 'react';
import logo from '../assets/img/signupform/logo.png';
import coins from '../assets/img/signupform/coins.png';
import gift from '../assets/img/signupform/gift.png';
import light from '../assets/img/signupform/light.png';
import bulb from '../assets/img/signupform/bulb.png';

const SignupForm = () => {
  return (
    <div className="bg-blue-50">
      <div className="max-w-4xl mx-auto text-left text-neutralDGrey">
        <div className='flex justify-between mb-4 md:mb-8'>
          <div className='flex flex-col'>
            <h1 className="text-xl lg:text-3xl font-semibold mb-4">
              Управляйте продажами, лояльностью,<br />
              чатами и рассылками в едином окне
            </h1>
            <p className="text-sm lg:text-lg text-neutralDGrey">
              CRM – система для розничной торговли<br />
              и интернет-магазинов
            </p>
          </div>
          <div className='hidden md:block'>
            <img src={logo} alt="Логотип" className='max-w-40' />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 md:gap-6 mb-4 md:mb-8">
          <div className="w-full">
            <label className="block mb-2 text-xs md:text-sm ml-2 text-neutralDGrey" htmlFor="place-name">
              Введите название заведения
            </label>
            <input
              type="text"
              id="place-name"
              placeholder="Введите название заведения"
              className="w-full md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-xs md:text-sm ml-2 text-neutralDGrey" htmlFor="phone-number">
              Введите номер телефона
            </label>
            <input
              type="text"
              id="phone-number"
              placeholder="+7 (000) 000 00 00"
              className="w-full md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button className="btn-primary w-full h-10 md:h-12 md:self-end">
            Подключить бесплатно
          </button>
        </div>

        <div className="grid gap-2 md:gap-8 text-neutralDGrey grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col md:flex-row gap-1 md:gap-0 items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-gray-300">
              <img src={coins} alt="Иконка пробного периода" className="w-5 h-5" />
            </div>
            <div className="text-center md:text-left">
              <span className="block text-xs text-neutralGrey">Пробный период 14 дней</span>
              <span className="block font-semibold text-blue-500">0% комиссии</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-1 md:gap-0 items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-gray-300">
              <img src={gift} alt="Иконка бесплатного подключения" className="w-5 h-5" />
            </div>
            <div className="text-center md:text-left">
              <span className="block text-xs text-neutralGrey">Для бизнеса</span>
              <span className="block font-semibold text-blue-500">бесплатно</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-1 md:gap-0 items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-gray-300">
              <img src={light} alt="Иконка подключения" className="w-5 h-5" />
            </div>
            <div className="text-center md:text-left">
              <span className="block text-xs text-neutralGrey">Подключение</span>
              <span className="block font-semibold text-blue-500">1 день</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-1 md:gap-0 items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-gray-300">
              <img src={bulb} alt="Иконка обучения" className="w-5 h-5" />
            </div>
            <div className="text-center md:text-left">
              <span className="block text-xs text-neutralGrey">Обучение персонала</span>
              <span className="block font-semibold text-blue-500">1 час</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignupModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
      <div
        className="bg-blue-50 rounded-3xl shadow-lg p-5 md:p-12 relative mx-3"
        ref={modalRef}
      >
        <button
          className="absolute top-2 right-4 md:top-4 md:right-6 text-2xl font-bold text-neutralDGrey lg:hover:text-brandPrimary transition-all"
          onClick={onClose}
        >
          &times;
        </button>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupModal;
