import React from "react";
import { motion } from "framer-motion";

const Sun = ({ dt, sunSet, sunRise, timeZone }) => {
  let clientTime = new Date().getTimezoneOffset();
  let rise = sunRise + clientTime * 60 + timeZone;
  let set = sunSet + clientTime * 60 + timeZone;
  let SUN_RISE = new Date(rise * 1000);
  let SUN_SET = new Date(set * 1000);
  let distance = SUN_SET.getHours() - SUN_RISE.getHours();
  let cityTime = new Date(dt + timeZone * 1000).getHours();
  let percent = (SUN_SET.getHours() - cityTime) / distance;

  let MAIN_LEFT = (percent * 100).toFixed();
  let MAIN_BOTTOM = 0;
  if (MAIN_LEFT > 60 && MAIN_LEFT <= 70) {
    MAIN_BOTTOM = 45;
  } else if (MAIN_LEFT > 10 && MAIN_LEFT <= 15) {
    MAIN_BOTTOM = 30;
  } else if (
    (MAIN_LEFT > 15 && MAIN_LEFT <= 25) ||
    (MAIN_LEFT > 70 && MAIN_LEFT <= 80)
  ) {
    MAIN_BOTTOM = 35;
  } else if (MAIN_LEFT > 25 && MAIN_LEFT <= 30) {
    MAIN_BOTTOM = 45;
  } else if (MAIN_LEFT > 30 && MAIN_LEFT <= 60) {
    MAIN_BOTTOM = 50;
  } else if (MAIN_LEFT > 80 && MAIN_LEFT <= 100) {
    MAIN_BOTTOM = 10;
    MAIN_LEFT = 85;
  } else if (MAIN_LEFT >= 7 && MAIN_LEFT <= 10) {
    MAIN_BOTTOM = 10;
    MAIN_LEFT = 8;
  } else {
    MAIN_BOTTOM = 10;
    MAIN_LEFT = 80;
  }
  return (
    <section className='details max-[580px]:w-full max-[580px]:h-24 overflow-hidden px-6 py-3 col-span-2'>
      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className='font-bold text-left max-[580px]:pb-2 flex items-center gap-1'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='#ffffff88'
          class='bi bi-sunrise'
          viewBox='0 0 16 16'
        >
          <path d='M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707m11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5' />
        </svg>
        Sun Time
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        style={{ borderRadius: "50%/100px 100px 0px 0px" }}
        className='w-full h-full border-1 border-solid border-cyan-50 opacity-80 bg-gradient-to-b from-white to-transparent'
      >
        <h4 className='absolute font-bold left-2 z-10 bottom-0'>
          {`${SUN_RISE.getHours()}:${SUN_RISE.getMinutes()}`}AM
        </h4>
        <img
          style={{
            left: `${MAIN_LEFT}%`,
            bottom: `${MAIN_BOTTOM}%`,
          }}
          className={`w-8 h-8 absolute`}
          src='/assets/sun.png'
          alt='icon'
        />
        <h4 className='absolute right-2 z-10 font-bold bottom-0'>
          {`${SUN_SET.getHours()}:${SUN_SET.getMinutes()}`}PM
        </h4>
      </motion.div>
    </section>
  );
};

export default Sun;
