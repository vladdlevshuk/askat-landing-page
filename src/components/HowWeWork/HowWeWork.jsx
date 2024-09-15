import React from 'react';
import laptopImage from '../../assets/img/howwework/laptop.png';
import './HowWeWork.css'

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const HowWeWork = () => {
  return (
    <div className='bg-neutralSilver py-16 md:py-20'>
      <motion.div
        variants={fadeIn("", 0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.2 }}
        className='max-w-screen-2xl mx-auto px-4 lg:px-14 flex flex-col lg:flex-row items-center justify-between gap-12'
      >
        <div className=''>
          <h2 className='font-bold mb-8 text-neutralDGrey' style={{fontSize: '1.7rem'}}>
            Пошаговое руководство по достижению <br /> Ваших бизнес-целей:
          </h2>
          <ul className='space-y-8'>
            <li className='flex justify-end text-right'>
              <div>
                <h3 className='font-semibold text-xl mb-2 text-neutralDGrey'>Первая коммуникация</h3>
                <p className='text-base text-neutralGrey max-w-80'>Где мы обсудим Ваши бизнес-цели и задачи, целевую аудиторию и текущие маркетинговые усилия</p>
              </div>
              <div className='w-10 h-10 ml-4'>
                <span className='flex items-center justify-center bg-brandPrimary text-white text-2xl w-10 h-10 rounded-full'>1</span>
              </div>
            </li>
            <li className='flex justify-end text-right lg:mr-24'>
              <div>
                <h3 className='font-semibold text-xl mb-2 text-neutralDGrey'>План разработки</h3>
                <p className='text-base text-neutralGrey max-w-80'>Изучим ваши требования, обеспечим максимально эффективное выполнение задач для проекта</p>
              </div>
              <div className='w-10 h-10 ml-4'>
                <span className='flex items-center justify-center bg-brandPrimary text-white text-2xl w-10 h-10 rounded-full'>2</span>
              </div>
            </li>
            <li className='flex justify-end text-right lg:mr-40'>
              <div>
                <h3 className='font-semibold text-xl mb-2 text-neutralDGrey'>Согласование</h3>
                <p className='text-base text-neutralGrey max-w-80'>Согласуем все аспекты проекта перед началом работы</p>
              </div>
              <div className='w-10 h-10 ml-4'>
                <span className='flex items-center justify-center bg-brandPrimary text-white text-2xl w-10 h-10 rounded-full'>3</span>
              </div>
            </li>
            <li className='flex justify-end text-right lg:mr-40'>
              <div>
                <h3 className='font-semibold text-xl mb-2 text-neutralDGrey'>Реализация</h3>
                <p className='text-base text-neutralGrey max-w-80'>Непосредственная работа над проектом согласно утвержденному плану</p>
              </div>
              <div className='w-10 h-10 ml-4'>
                <span className='flex items-center justify-center bg-brandPrimary text-white text-2xl w-10 h-10 rounded-full'>4</span>
              </div>
            </li>
            <li className='flex justify-end text-right lg:mr-24'>
              <div>
                <h3 className='font-semibold text-xl mb-2 text-neutralDGrey'>Тестирование</h3>
                <p className='text-base text-neutralGrey max-w-80'>И отладка всех компонентов проекта для обеспечения качества</p>
              </div>
              <div className='w-10 h-10 ml-4'>
                <span className='flex items-center justify-center bg-brandPrimary text-white text-2xl w-10 h-10 rounded-full'>5</span>
              </div>
            </li>
            <li className='flex justify-end text-right'>
              <div>
                <h3 className='font-semibold text-xl mb-2 text-neutralDGrey'>Продакшн</h3>
                <p className='text-base text-neutralGrey max-w-80'>Запуск готового продукта в эксплуатацию с его поддержкой</p>
              </div>
              <div className='w-10 h-10 ml-4'>
                <span className='flex items-center justify-center bg-brandPrimary text-white text-2xl w-10 h-10 rounded-full'>6</span>
              </div>
            </li>
          </ul>
        </div>
        <div className='right-side mt-12 lg:mt-32 flex'>
          <img src={laptopImage} alt='Laptop' className='w-full h-auto max-w-5xl' />
        </div>
      </motion.div>
    </div>
  );
};

export default HowWeWork;
