import React from "react";
import { motion } from "framer-motion";
const Temperture = ({ maxTemp, minTemp }) => {
  return (
    <section className='details max-[580px]:w-full flex col-span-2 flex-col justify-between px-6 py-3 '>
      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className='text-left font-bold flex items-center gap-1'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='#ffffff88'
          class='bi bi-thermometer-half'
          viewBox='0 0 16 16'
        >
          <path d='M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415' />
          <path d='M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1' />
        </svg>
        Temperture
      </motion.h3>
      <div className='flex my-4 items-baseline gap-3 justify-between w-full'>
        <span>{(minTemp - 272.15).toFixed(2)}°C</span>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 100 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className='bg-gradient-to-r from-lime-500 to-red-600 w-2 h-2 rounded-full flex-1'
        ></motion.div>
        <span>{(maxTemp - 272.15).toFixed(2)}°C</span>
      </div>
    </section>
  );
};

export default Temperture;
