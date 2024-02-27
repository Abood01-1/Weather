import React from "react";
import { motion } from "framer-motion";
const Wind = ({ windSpeed, windDeg }) => {
  return (
    <section className='details max-[580px]:w-full px-6 py-3 flex flex-col justify-between items-center col-span-2'>
      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className='font-bold self-start flex items-center gap-1'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='#ffffff88'
          class='bi bi-wind'
          viewBox='0 0 16 16'
        >
          <path d='M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5' />
        </svg>
        Wind
      </motion.h3>
      <div className='flex font-bold justify-center gap-8'>
        <h4 className='text-xl flex-1'>{windSpeed} m/s</h4>
        <div className='flex flex-col justify-center flex-1'>
          <motion.svg
            initial={{ transform: `rotate(0deg)` }}
            whileInView={{ transform: `rotate(${windDeg}deg)` }}
            transition={{ duration: 0.4, delay: 0.7 }}
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            className='bi bi-arrow-right w-10 h-10 origin-center'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8'
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
};

export default Wind;
