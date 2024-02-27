import React from "react";
import { motion } from "framer-motion";
const Pressure = ({ press }) => {
  return (
    <section className='details max-[580px]:w-full col-span-2 flex flex-col justify-between items-center px-6 py-3'>
      <motion.h3
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className='self-start font-bold flex items-center gap-1'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='#ffffff88'
          className='bi bi-stopwatch'
          viewBox='0 0 16 16'
        >
          <path d='M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z' />
          <path d='M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3' />
        </svg>
        Pressure
      </motion.h3>
      <h1 className='text-2xl m-3  font-bold justify-self-start'>
        {press} hPa/mb
      </h1>
    </section>
  );
};

export default Pressure;