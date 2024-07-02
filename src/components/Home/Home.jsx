import React from 'react';
import banner1 from '../../assets/banner.png';
import '../../App.css';
import './Home.css';

const Home = () => {
  return (
    <div className='bg-neutralSilver mx-auto' id='home'>
      <div className='lg:px-14 px-5 max-w-screen-2xl mx-auto container' style={{height: '92vh', maxWidth: '1440px'}}>
        <div className="my-20 py-12 md:py-24 flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          <div className='hidden lg:block w-full md:w-auto justify-center'>
            <img src={banner1} alt="Banner" className='w-full md:w-auto' style={{maxWidth: '500px'}} />
          </div>
          {/* hero text */}
          <div className='lg:text-left text-center'>
            <h1 className='text-4xl xl:text-6xl md:text-5xl font-semibold mb-4 text-neutralDGrey lg:w-3/4 leading-snug'>
              Интегратор
              <span className='text-brandPrimary leading-snug'> RetailCRM</span> для
              <span className='text-brandPrimary leading-snug'> eCommerce</span>,
              ритейла и <span className='text-brandPrimary leading-snug'> HoReCa</span>
            </h1>
            <p className='text-neutralGrey text-xl leading-8 mb-8 mx-auto lg:mx-0' style={{maxWidth: '650px'}}>
              Ведем ваш бизнес к успеху через автоматизацию
              продаж и маркетинга для eCommerce, Ритейла и HoReCa
            </p>
            <div className='flex lg:justify-start justify-center'>
              <button className='btn-primary'>Записаться на консультацию</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
