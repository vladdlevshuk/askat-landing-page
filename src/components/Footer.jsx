import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from '../assets/logo.png';
import { FaXmark, FaBars, FaWhatsapp, FaTelegram } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const MyFooter = () => {
  return (
    <Footer container className='p-0' id='footer'>
      <motion.div
        variants={fadeIn("", 0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.4 }}
        className="bg-[#263238] lg:p-6 p-4 rounded-none w-full"
      >
        <div className="grid mx-auto w-full justify-between sm:gap-16 gap-6 sm:flex sm:justify-between md:flex md:grid-cols-1" style={{maxWidth: '1440px'}}>
          <div>
            <a href="/" className='text-4xl font-semibold flex items-center'>
              <img src={logo} alt="Logo" className='w-10 inline-block items-center' />
              <span className='text-[#FFFFFF] ml-0'>ASKAT</span>
            </a>
            <div className='flex flex-col gap-1 text-white mt-8 font-normal'>
              <p>© 2024 Askat</p>
              <p className='mb-4 sm:mb-6 lg:mb-10'>Все права защищены</p>
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-left">
                <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaTelegram className='text-white h-6 w-6 lg:hover:text-brandPrimary transition-all duration-300' />
                </a>
                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className='text-white h-6 w-6 lg:hover:text-brandPrimary transition-all duration-300' />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Компания" className='text-white'/>
              <Footer.LinkGroup col className='text-white font-normal'>
                <Footer.Link href="#">О нас</Footer.Link>
                <Footer.Link href="#">Конакты</Footer.Link>
                <Footer.Link href="#">Отзывы</Footer.Link>
                <Footer.Link href="#">Вакансии</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Продукт" className='text-white'/>
              <Footer.LinkGroup col className='text-white font-normal'>
                <Footer.Link href="#">Блог</Footer.Link>
                <Footer.Link href="#">Гайды</Footer.Link>
                <Footer.Link href="#">Вебинары</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Контакты" className='text-white'/>
              <Footer.LinkGroup col className='text-white font-normal'>
                <Footer.Link href="#">support@askat.ru</Footer.Link>
                <Footer.Link href="#">+7 (777) 777-77-77</Footer.Link>
                <Footer.Link href="#" className='lg:max-w-48'>125489, Санкт-Петербург ул. Пушкина, д. 7, стр. 9</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </motion.div>
    </Footer>
  )
}

export default MyFooter