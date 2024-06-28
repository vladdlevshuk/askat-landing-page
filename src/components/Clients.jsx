import React from 'react'
import company1 from '../assets/company/company1.png'
import company2 from '../assets/company/company2.png'
import company3 from '../assets/company/company3.png'
import company4 from '../assets/company/company4.png'
import company5 from '../assets/company/company5.png'
import company6 from '../assets/company/company6.png'
import company7 from '../assets/company/company7.png'
import company8 from '../assets/company/company8.png'
import company9 from '../assets/company/company9.png'

// Массив с импортированными картинками, их классами и атрибутами alt
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

const Services = () => {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen2xl mx-auto' style={{ maxWidth: '1440px' }}>
      <div className='text-center my-8'>
        <h2 className='text-4xl md:text-5xl text-neutralDGrey font-semibold mb-4'>Наши партнеры</h2>
        <p className='text-neutralGrey text-xl'>Уже интегрировали RetailCRM c:</p>

        {/* company logo */}
        <div className='my-12 mx-auto flex flex-wrap justify-center gap-8 md:gap-12'>
          {companyLogos.map((logo, index) => (
            <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 lg:hover:scale-110">
              <img src={logo.src} alt={logo.alt} className={`${logo.width} h-20 object-contain cursor-pointer`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
