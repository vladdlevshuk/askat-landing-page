import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const steps = [
  {
    id: 1,
    title: 'Первая коммуникация',
    description: 'Во время первой консультации мы обсудим ваши бизнес-цели и задачи, целевую аудиторию и текущие маркетинговые усилия. Это позволит нам понять ваши потребности и адаптировать наши услуги под ваши требования.'
  },
  {
    id: 2,
    title: 'Изучение и создание плана разработки',
    description: 'Мы изучим ваши требования и создадим план разработки, чтобы обеспечить максимально эффективное выполнение проекта.'
  },
  {
    id: 3,
    title: 'Согласование',
    description: 'Согласование всех аспектов проекта перед началом работы.'
  },
  {
    id: 4,
    title: 'Реализация',
    description: 'Непосредственная работа над проектом согласно утвержденному плану.'
  },
  {
    id: 5,
    title: 'Тестирование',
    description: 'Тестирование и отладка всех компонентов проекта для обеспечения качества.'
  },
  {
    id: 6,
    title: 'Продакшн',
    description: 'Запуск готового продукта в эксплуатацию и поддержка.'
  },
];

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(1);

  const toggleStep = (id) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <div className='bg-neutralSilver py-16 md:py-20'>
      <div className='max-w-screen-2xl mx-auto px-4 lg:px-14' style={{ maxWidth: '1000px' }}>
        <motion.div
          variants={fadeIn("", 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className='mx-auto text-center lg:mx-0 text-3xl md:text-5xl text-neutralDGrey font-semibold mb-4'>Как мы работаем</h2>
          <p className='text-xl text-center text-neutralGrey mb-8'>Пошаговое руководство по достижению ваших бизнес-целей</p>
        </motion.div>
        <motion.div
          variants={fadeIn("", 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='space-y-4'
        >
          {steps.map(step => (
            <div
              key={step.id}
              className={`shadow-sm rounded-lg ${activeStep === step.id ? 'bg-brandPrimary' : 'bg-white'}`}
              onMouseUp={() => toggleStep(step.id)}
            >
              <div className='flex justify-between items-center p-4 cursor-pointer'>
                <div className='flex items-center'>
                  <span className={`text-xl md:text-2xl lg:text-3xl mr-4 ${activeStep === step.id ? 'text-white' : 'text-brandPrimary'}`}>
                    {step.id < 10 ? `0${step.id}` : step.id}
                  </span>
                  <h3 className={`text-xl font-semibold ${activeStep === step.id ? 'text-white' : 'text-neutralDGrey'}`}>
                    {step.title}
                  </h3>
                </div>
                <span className={`text-2xl md:text-3xl lg:text-4xl ${activeStep === step.id ? 'text-white' : 'text-brandPrimary'}`}>
                  {activeStep === step.id ? '-' : '+'}
                </span>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: activeStep === step.id ? 'auto' : 0, opacity: activeStep === step.id ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className='overflow-hidden'
              >
                <div className='p-4 bg-white text-neutralGrey rounded-b-md'>
                  <p className='text-sm md:text-md lg:text-lg'>{step.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HowWeWork;
