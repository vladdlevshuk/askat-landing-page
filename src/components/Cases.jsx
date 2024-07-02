import React from 'react'
import firstProject from '../assets/cases/first-project.png'
import secondProject from '../assets/cases/second-project.png'
import thirdProject from '../assets/cases/third-project.png'

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Cases = () => {
  const projects = [
    {id: 1, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', image: firstProject},
    {id: 2, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', image: secondProject},
    {id: 3, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', image: thirdProject},
  ];
  return (
    <div className='px-4 py-16 lg:px-14 max-w-screen 2xl mx-auto' style={{maxWidth: '1440px'}} id='cases'>
        <motion.div
          variants={fadeIn("", 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.4 }}
          className='text-center md:w-1/2 mx-auto'
        >
          <h2 className='mx-auto text-center lg:mx-0 text-3xl md:text-5xl text-neutralDGrey font-semibold mb-4'>Кейсы</h2>
          <p className='text-xl text-neutralGrey mb-8 mx-auto'>Ознакомьтесь с нашими практическими примерами</p>
        </motion.div>
        {/* all projects */}
        <div className='grid xl:grid-cols-3 grid-cols-1 gap-8 xl:gap-16 items-center justify-between'>
          {
            projects.map(project => <motion.div
                variants={fadeIn("", 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.4 }}
                key={project.id} className='mx-auto relative mb-12 cursor-pointer'
              >
              <img src={project.image} alt="Project Image" className='lg:hover:scale-95 transition-all duration-300 xl:max-w-96'/>
              <div className='text-center px-4 py-8 bg-white shadow-xl rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                <h3 className='mb-3 text-neutralGrey font-semibold'>{project.title}</h3>
                <div className='flex items-center justify-center gap-8'>
                  <a href="/" className='font-bold text-brandPrimary lg:hover:scale-95 transition-all duration-200'>
                    Подробнее
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
                        stroke="#2196F3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>)
          }
        </div>
    </div>
  )
}

export default Cases