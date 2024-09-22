import React from 'react'
import logo from '../../assets/img/signupform/logo.png';
import coins from '../../assets/img/signupform/coins.png';
import gift from '../../assets/img/signupform/gift.png';
import light from '../../assets/img/signupform/light.png';
import bulb from '../../assets/img/signupform/bulb.png';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

export const SignupForm = () => {
  return (
    <motion.div
      id='about'
      variants={fadeIn("", 0.1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.2 }}
      className='bg-blue-50 py-10 px-6 sm:px-12 lg:px-24 mb-20'
    >
      <div className="max-w-4xl mx-auto text-left text-neutralDGrey">
        <div className='flex justify-between mb-3'>
          <div className='flex flex-col'>
            <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
              Управляйте продажами, лояльностью,<br />
              чатами и рассылками в едином окне
            </h1>
            <p className="text-base lg:text-lg text-neutralDGrey mb-8">
              CRM – система для розничной торговли<br />
              и интернет-магазинов
            </p>
          </div>
          <div className='hidden md:block'>
            <img src={logo} alt="" className='max-w-40' />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8">
          <div className="w-full">
            <label className="block mb-2 text-sm ml-2 text-neutralDGrey" htmlFor="place-name">
              Введите название заведения
            </label>
            <input
              type="text"
              id="place-name"
              placeholder="Введите название заведения"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm ml-2 text-neutralDGrey" htmlFor="phone-number">
              Введите номер телефона
            </label>
            <input
              type="text"
              id="phone-number"
              placeholder="+7 (000) 000 00 00"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button className="btn-primary w-full h-12 md:self-end">
            Подключить бесплатно
          </button>
        </div>

        <div className="grid gap-3 md:gap-8 text-neutralDGrey grid-cols-2 md:grid-cols-4">
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
    </motion.div>
  );
}
