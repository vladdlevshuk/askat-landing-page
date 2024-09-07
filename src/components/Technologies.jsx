import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaPhp, FaReact, FaPython, FaAndroid, FaApple } from 'react-icons/fa';

const technologies = [
  {
    id: 1,
    name: 'PHP',
    icon: <FaPhp className="text-6xl transition-colors duration-300" />,
  },
  {
    id: 2,
    name: 'React',
    icon: <FaReact className="text-6xl transition-colors duration-300" />,
  },
  {
    id: 3,
    name: 'Python',
    icon: <FaPython className="text-6xl transition-colors duration-300" />,
  },
  {
    id: 4,
    name: 'Android',
    icon: <FaAndroid className="text-6xl transition-colors duration-300" />,
  },
  {
    id: 5,
    name: 'iOS',
    icon: <FaApple className="text-6xl transition-colors duration-300" />,
  },
];

const Technologies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (id) => {
    setHoveredCard(id);
  };

  const handleHoverExit = () => {
    setHoveredCard(null);
  };

  return (
    <div className='bg-white py-16 md:py-20'>
      <div className='max-w-screen-2xl mx-auto px-4 lg:px-14' style={{ maxWidth: '1300px' }}>
        <motion.div
          variants={fadeIn("", 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className='md:text-4xl text-3xl font-semibold text-center text-neutralDGrey mb-12'>Наши технологии</h2>
        </motion.div>
        <motion.div
          variants={fadeIn("", 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.15 }}
          className='flex flex-wrap justify-center gap-8'
        >
          {technologies.map(tech => (
            <motion.div
              key={tech.id}
              className={`bg-white p-6 rounded-3xl cursor-pointer shadow-md flex-grow flex-shrink-0 transition-all duration-300 ${hoveredCard === tech.id ? 'lg:hover:bg-brandPrimary' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => handleHover(tech.id)}
              onHoverEnd={handleHoverExit}
              layout
              animate={{ scale: hoveredCard === tech.id ? 1.05 : 1 }}
              transition={{ duration: 0.1 }}
            >
              <div className='flex flex-col items-center justify-center h-full'>
                <div className='mb-4'>
                  {React.cloneElement(tech.icon, { className: `${hoveredCard === tech.id ? 'text-white' : 'text-brandPrimary'} text-6xl transition-colors duration-300` })}
                </div>
                <h3 className={`md:text-2xl text-xl font-semibold text-center ${hoveredCard === tech.id ? 'text-white' : 'text-neutralDGrey'} transition-colors duration-300`}>{tech.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
