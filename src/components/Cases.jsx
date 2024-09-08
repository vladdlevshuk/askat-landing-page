import React from 'react';
import yandex from '../assets/img/cases/yandex.png';
import osmicards from '../assets/img/cases/osmicards.png';
import iiko from '../assets/img/cases/iiko.png';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Cases = () => {
  const projects = [
    { id: 1, title: 'Интеграция Яндекс.Еда с RetailCRM', image: yandex },
    { id: 2, title: 'Интеграция Osmicards с RetailCRM', image: osmicards },
    { id: 3, title: 'Интеграция IIKO с RetailCRM', image: iiko },
  ];

  return (
    <div className='px-4 py-16 md:py-20 lg:px-14 max-w-screen-2xl mx-auto' style={{ maxWidth: '1440px' }} id='cases'>
      <motion.div
        variants={fadeIn("", 0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.4 }}
        className='text-center md:w-1/2 mx-auto'
      >
        <h2 className='mx-auto text-center lg:mx-0 text-3xl md:text-4xl text-neutralDGrey font-semibold mb-4'>Кейсы</h2>
        <p className='text-lg text-neutralGrey mb-8 mx-auto'>с нашими практическими примерами:</p>
      </motion.div>
      <div className='grid xl:grid-cols-3 grid-cols-1 items-center justify-between'>
        {projects.map(project => (
          <motion.div
            key={project.id}
            variants={fadeIn("", 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className='mx-auto relative mb-12'
          >
            <div className='relative'>
              <img
                src={project.image}
                alt="Project Image"
                className='cursor-pointer rounded-3xl transition-all duration-300 sm:max-w-md xl:max-w-96'
              />
              <div className='absolute inset-0 rounded-3xl flex flex-col items-center justify-center bg-gradient-to-b from-black/70 to-transparent'>
                <h3 className='text-white text-xl max-w-72 font-semibold text-center px-4 mb-4'>{project.title}</h3>
                <button className='text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300'>
                  Подробнее
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Cases;
