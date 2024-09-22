import React from 'react'
import { Footer } from "flowbite-react";

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const MyFooter = () => {
  return (
    <Footer container className='p-0' id='footer'>
      <motion.div
        variants={fadeIn("", 0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#263238] lg:p-6 p-4 rounded-none w-full"
      >
      </motion.div>
    </Footer>
  )
}

export default MyFooter