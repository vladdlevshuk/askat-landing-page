import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa6';

import retailcrm from '../assets/img/footer/retailcrm.png'
import moisklad from '../assets/img/footer/moisklad.png'
import hoster from '../assets/img/footer/hoster.png'
import dadata from '../assets/img/footer/dadata.png'

const MyFooter = () => {
  return (
    <motion.footer
      variants={fadeIn("", 0.1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#263238] text-white lg:p-12 p-3"
      id='contacts'
    >
      <div className="mx-auto" style={{maxWidth: '1440px'}}>
        <div className="flex flex-col justify-between mb-6 md:mb-10">
          <div className='flex justify-between mb-10'>
            <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
              <h1 className="text-6xl font-bold mb-2">ASKAT</h1>
              <p className="text-white text-sm">Давайте развивать Ваш бизнес вместе!</p>
            </div>
            <div className='flex gap-4'>
              <span>RU</span>
              <span>EG</span>
              <span>ES</span>
            </div>
          </div>

          <div className="flex flex-wrap w-full">
            <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0">
              <h2 className="text-base md:text-lg font-semibold mb-3">Компания</h2>
              <ul className="text-gray-400 text-sm md:text-base space-y-2">
                <li><a href="#" className="lg:lg:hover:text-white">О нас</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Контакты</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Отзывы</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Вакансии</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Блог</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Гайды</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Вебинары</a></li>
              </ul>
            </div>

            <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0">
              <h2 className="text-base md:text-lg font-semibold mb-3">Услуги</h2>
              <ul className="text-gray-400 text-sm md:text-base space-y-2">
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Аудит бизнес-процессов</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Сопровождение и развитие</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Маркетинг и реклама</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Подключение модулей</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Интеграция RetailCRM</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Индивидуальная разработка</a></li>
              </ul>
            </div>

            <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0">
              <h2 className="text-base md:text-lg font-semibold mb-3">Дополнительно</h2>
              <ul className="text-gray-400 text-sm md:text-base space-y-2">
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Реквизиты</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Разработка сайта</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Политика конфиденциальности</a></li>
              </ul>
            </div>

            <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0">
              <h2 className="text-base md:text-lg font-semibold mb-3">Решения для RetailCRM</h2>
              <ul className="text-gray-400 text-sm md:text-base space-y-2">
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Оплата</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Доставка</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Маркетплейсы</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Аналитика</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Мессенджеры</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">CMS</a></li>
                <li><a href="#" className="lg:hover:text-white transition-all duration-200">Лояльность</a></li>
              </ul>
            </div>

            <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0 lg:mt-10">
              <h2 className="text-base md:text-lg font-semibold mb-3">Беларусь</h2>
              <ul className="text-gray-400 text-sm md:text-base space-y-2">
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Минск, пр-т Дзержинского, 36, оф. 59"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:hover:text-white transition-all duration-200"
                  >
                    Минск,<br /> пр-т Дзержинского, 36, оф. 59
                  </a>
                </li>
                <li><a href='tel:+375293623303' className="text-gray-400 lg:hover:text-white transition-all duration-200">+375 (29) 362-33-03</a></li>
                <li><a href="mailto:hi@radis.by" className="lg:hover:text-white transition-all duration-200">hi@radis.by</a></li>
              </ul>
            </div>

            <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0 lg:mt-10">
              <h2 className="text-base md:text-lg font-semibold mb-3">Россия</h2>
              <ul className="text-gray-400 text-sm md:text-base space-y-2">
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Смоленск, пер. Тульский, 8, оф. 26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:hover:text-white transition-all duration-200"
                  >
                    Смоленск,<br /> пер. Тульский, 8, оф. 26
                  </a>
                </li>
                <li><a href="tel:+79772555029" className="text-gray-400 lg:hover:text-white transition-all duration-200">+7 (977) 255-60-29</a></li>
                <li><a href="mailto:hi@radis.by" className="lg:hover:text-white transition-all duration-200">hi@radis.by</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex space-x-6 sm:mt-0 sm:justify-left mb-6 md:mb-10">
          <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTelegram className='text-white h-6 w-6 lg:hover:text-gray-400 transition-all duration-200' />
          </a>
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className='text-white h-6 w-6 lg:hover:text-gray-400 transition-all duration-200' />
          </a>
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='text-white h-6 w-6 lg:hover:text-gray-400 transition-all duration-200' />
          </a>
        </div>

        <div className='flex flex-wrap md:flex-row justify-between items-end mb-6 md:mb-10'>
          <div className='flex flex-col'>
            <span className='text-xl mb-3 md:mb-6'>Мы являемся партнерами:</span>
            <div className='flex flex-wrap items-center gap-3 md:gap-0 md:space-x-8'>
              <img src={retailcrm} alt='RetailCRM' className='h-8' />
              <img src={moisklad} alt='МойСклад' className='h-8' />
              <img src={hoster} alt='Hoster' className='h-8' />
              <img src={dadata} alt='DaData' className='h-8' />
            </div>
          </div>
          <div className='flex flex-col text-left md:text-right gap-2 text-sm text-gray-400 mt-6 md:mt-0'>
            <a href='mailto:support@askat.ru' className='text-gray-400 lg:hover:text-white transition-all duration-200'>support@askat.ru</a>
            <a href='tel:+77777777777' className='text-gray-400 lg:hover:text-white transition-all duration-200'>+7 (777) 777-77-77 (RUS)</a>
            <a href='tel:+375333333333' className='text-gray-400 lg:hover:text-white transition-all duration-200'>+375 (33) 333-33-33 (BLR)</a>
            <a href='tel:+995325555555' className='text-gray-400 lg:hover:text-white transition-all duration-200'>+995 (32) 555-55-55 (GEO)</a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-3 md:pt-10">
          <div className="flex flex-wrap justify-center items-center">
            <div className="text-#616161 text-sm">
              © 2024 Askat Все права защищены
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default MyFooter;
