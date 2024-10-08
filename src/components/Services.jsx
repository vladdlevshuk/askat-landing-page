import React, { useState, useEffect } from 'react';
import company1 from '../assets/img/company/company1.png';
import company2 from '../assets/img/company/company2.png';
import company3 from '../assets/img/company/company3.png';
import company4 from '../assets/img/company/company4.png';
import company5 from '../assets/img/company/company5.png';
import company6 from '../assets/img/company/company6.png';
import company7 from '../assets/img/company/company7.png';
import company8 from '../assets/img/company/company8.png';
import company9 from '../assets/img/company/company9.png';
import service1 from '../assets/img/services/audit.png';
import service2 from '../assets/img/services/integration.png';
import service3 from '../assets/img/services/connection.png';
import service4 from '../assets/img/services/marketing.png';
import service5 from '../assets/img/services/support.png';
import service6 from '../assets/img/services/development.png';
import Popup from './Popup.jsx'

import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';
import { useMediaQuery } from '@react-hook/media-query';

const companyLogos = [
  { src: company1, width: 'w-32', alt: 'RetailCRM Logo', link: 'https://www.retailcrm.ru/' },
  { src: company2, width: 'w-20', alt: 'Мой склад Logo', link: 'https://www.moysklad.ru/by/' },
  { src: company3, width: 'w-32', alt: 'AmoCRM Logo', link: 'https://www.amocrm.ru/' },
  { src: company4, width: 'w-16', alt: 'Passteam Logo', link: 'https://www.passteam.ru/' },
  { src: company5, width: 'w-36', alt: 'Tilypad Logo', link: 'https://tillypad.ru/' },
  { src: company6, width: 'w-20', alt: 'Iiko Logo', link: 'https://iiko.ru/' },
  { src: company7, width: 'w-24', alt: 'Abcp Logo', link: 'https://www.abcp.ru/'},
  { src: company8, width: 'w-20', alt: 'Zzap Logo', link: 'https://www.zzap.ru/' },
  { src: company9, width: 'w-28', alt: 'OsmiCards Logo', link: 'https://osmicards.com/' },
];

const services = [
  { id: 1, title: "Аудит бизнес-процессов", description: "Проводим качественный аудит, погружаемся в бизнес “с головой”, описываем процессы и фиксируем показатели и выдаем технические задания", image: service1 },
  { id: 2, title: "Интеграция RetailCRM", description: "Интегрируем RetailCRM сайты с любым внешним сервисом: 1С, Мой Склад, Mindbox и т.п.", image: service2 },
  { id: 3, title: "Подключение модулей", description: "Подключаем модули с официального маркетплейса RetailCRM, разработанные вендором и сертифицированными веб-студиями", image: service3 },
  { id: 4, title: "Маркетинг и реклама", description: "Разрабатываем фирменные шаблоны писем. Создаем собственные правила для триггерных и транзакционных рассылок. Отправляем маркетинговые Email и SMS рассылки по сегментам", image: service4 },
  { id: 5, title: "Сопровождение и развитие", description: "Для сопровождения и поддержки работы мы выделяем персонального аналитика", image: service5 },
  { id: 6, title: "Индивидуальная разработка", description: "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века", image: service6 }
];

const Services = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleScroll = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const rect = servicesSection.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsPopupVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='md:px-14 px-4 py-16 md:py-20 max-w-screen2xl mx-auto' style={{ maxWidth: '1440px' }}>
      <div>
        <motion.div
          variants={fadeIn("", 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.4 }}
          className='text-center mb-8'
        >
          <h2 className='text-3xl md:text-4xl text-neutralDGrey font-semibold mb-4'>Наши партнеры</h2>
          <p className='text-neutralGrey text-lg'>Уже интегрировали RetailCRM c:</p>
        </motion.div>

        <motion.div
          variants={fadeIn("", 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.4 }}
          className='lg:mt-8 mx-auto flex flex-wrap justify-center gap-8 md:gap-12'
        >
          {companyLogos.map((logo, index) => (
            <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 lg:hover:scale-110">
              <img src={logo.src} alt={logo.alt} className={`${logo.width} h-20 object-contain cursor-pointer`} />
            </a>
          ))}
        </motion.div>
      </div>

      <div>
        <motion.div
          id='services'
          variants={fadeIn("", 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.4 }}
          className='text-center mt-16 mb-8'
        >
          <h2 className='text-3xl md:text-4xl text-neutralDGrey font-semibold mb-4'>
            Услуги
          </h2>
          <p className='mx-auto text-neutralGrey text-lg' style={{ maxWidth: '1000px' }}>
            В рамках нашей работы с CRM системой RetailCRM мы предлагаем разнообразные услуги, способствующие росту вашего бизнеса в онлайне, в числе которых:
          </p>
        </motion.div>
      </div>

      {isMobile ? (
        <motion.div
          variants={fadeIn("", 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.15 }}
          className='mt-14 lg:px-24 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-20'
        >
          {services.map(service => (
            <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto lg:h-80 rounded-3xl shadow-md cursor-pointer lg:hover:-translate-y-2
            lg:hover:border-b-4 lg:hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full'>
              <div className='lg:hover:-translate-y-1 transition-all duration-300 flex flex-col items-start h-full'>
                <div className='bg-[#cde6ff] h-12 w-12 mx-auto rounded-tl-3xl rounded-br-3xl'>
                  <img src={service.image} alt="Service Icon" className='-ml-4 w-10'/>
                </div>
                <h4 className='text-2xl mx-auto font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                <p className='text-sm text-neutralGrey'>{service.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      ) : (
        <div className='mt-14 lg:px-24 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 mx-auto' style={{maxWidth: '1250px'}}>
          {services.map(service => (
            <motion.div
              variants={fadeIn("", 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.4 }}
              key={service.id}
              className='px-4 py-7 text-center md:w-[310px] mx-auto lg:h-72 lg:hover:-translate-y-2
              transition-all duration-300 flex items-center justify-center h-full'
            >
              <div className='transition-all duration-300 flex flex-col items-start h-full'>
                <div className='bg-[#cde6ff] h-12 w-12 mx-auto rounded-tl-3xl rounded-br-3xl'>
                  <img src={service.image} alt="Service Icon" className='-ml-4 w-10'/>
                </div>
                <h4 className='text-2xl mx-auto font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                <p className='text-sm text-neutralGrey'>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {isPopupVisible && <Popup onClose={() => setIsPopupVisible(false)} />}
    </div>
  );
};

export default Services;
