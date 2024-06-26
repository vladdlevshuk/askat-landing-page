import React from 'react';
import company1 from '../assets/company/company1.png';
import company2 from '../assets/company/company2.png';
import company3 from '../assets/company/company3.png';
import company4 from '../assets/company/company4.png';
import company5 from '../assets/company/company5.png';
import company6 from '../assets/company/company6.png';
import company7 from '../assets/company/company7.png';
import company8 from '../assets/company/company8.png';
import company9 from '../assets/company/company9.png';
import service1 from '../assets/services/audit.png';
import service2 from '../assets/services/integration.png';
import service3 from '../assets/services/connection.png';
import service4 from '../assets/services/marketing.png';
import service5 from '../assets/services/support.png';
import service6 from '../assets/services/development.png';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import {useMediaQuery, useMediaQueries} from '@react-hook/media-query'

const companyLogos = [
  { src: company1, width: 'w-32', alt: 'RetailCRM Logo', link: 'https://www.retailcrm.ru/' },
  { src: company2, width: 'w-20', alt: 'Мой склад Logo', link: 'https://www.moysklad.ru/by/' },
  { src: company3, width: 'w-32', alt: 'AmoCRM Logo', link: 'https://www.amocrm.ru/' },
  { src: company4, width: 'w-16', alt: 'Passteam Logo', link: 'https://www.passteam.ru/' },
  { src: company5, width: 'w-36', alt: 'Tilypad Logo', link: 'https://tillypad.ru/' },
  { src: company6, width: 'w-20', alt: 'Iiko Logo', link: 'https://iiko.ru/' },
  { src: company7, width: 'w-28', alt: 'OsmiCards Logo', link: 'https://osmicards.com/' },
  { src: company8, width: 'w-20', alt: 'Zzap Logo', link: 'https://www.zzap.ru/' },
  { src: company9, width: 'w-24', alt: 'Abcp Logo', link: 'https://www.abcp.ru/' },
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
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen2xl mx-auto' style={{ maxWidth: '1440px' }}>
      <div>
        <motion.div
          variants={fadeIn("", 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.4 }}
          className='text-center my-8'
        >
          <h2 className='text-4xl md:text-5xl text-neutralDGrey font-semibold mb-4'>Наши партнеры</h2>
          <p className='text-neutralGrey text-xl'>Уже интегрировали RetailCRM c:</p>
        </motion.div>

        <motion.div
          variants={fadeIn("", 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.4 }}
          className='lg:my-20 mx-auto flex flex-wrap justify-center gap-8 md:gap-12'
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
          variants={fadeIn("", 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.4 }}
          className='text-center my-8'
        >
          <h2 className='text-4xl md:text-5xl text-neutralDGrey font-semibold mb-4'>
            Услуги
          </h2>
          <p className='mx-auto text-neutralGrey text-xl' style={{ maxWidth: '1000px' }}>
            В рамках нашей работы с CRM системой RetailCRM мы предлагаем разнообразные услуги, способствующие росту вашего бизнеса в онлайне. В числе наших услуг:
          </p>
        </motion.div>
      </div>

      {isMobile ? (
        <div className='mt-14 lg:px-24 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-20'>
          {services.map(service => (
            <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto lg:h-80 rounded-md shadow-md cursor-pointer lg:hover:-translate-y-2
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
        </div>
      ) : (
        <motion.div
          variants={fadeIn("", 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.4 }}
          className='mt-14 lg:px-24 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-20'
        >
          {services.map(service => (
            <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto lg:h-80 rounded-md shadow-md cursor-pointer lg:hover:-translate-y-2
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
      )}
    </div>
  );
};

export default Services;
