import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Newsletter = () => {
  return (
    <motion.div
      variants={fadeIn("", 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.4 }}
      className='bg-neutralSilver'
    >
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto lg:py-12 py-8'>
        <div className='flex flex-col justify-center text-center'>
          <h2 className='lg:text-5xl md:text-4xl text-3xl mx-auto text-neutralDGrey lg:max-w-5xl font-semibold lg:leading-snug mb-8'>
            Зарегистрируйтесь в <span className='text-brandPrimary'>RetailCRM</span> и развивайте бизнес вместе с нами
          </h2>
          <div className='flex justify-center lg:gap-4 gap-2 mb-4'>
            <button className='bg-brandPrimary lg:text-xl text-md text-white py-2 px-4 transition-all duration-300 rounded lg:hover:bg-neutralDGrey cursor-pointer'>
              Начать бесплатно
{/*               <svg
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
              </svg> */}
            </button>
            <button className='bg-neutralSilver lg:text-xl text-md text-neutralGrey py-2 px-4 transition-all duration-300 rounded lg:hover:text-brandPrimary cursor-pointer'>
              Запись на демо
            </button>
          </div>
          <p className='lg:text-md text-sm text-neutralGrey'>Тариф PRO 14 дней бесплатно</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
