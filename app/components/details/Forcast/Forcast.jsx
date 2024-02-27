import React, { useState } from "react";
import { motion } from "framer-motion";
const Forcast = ({ days }) => {
  let dayName = [];
  let MAIN_OBJECT = [];
  let icn = [];
  let temp = [];
  let DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  days.map((ele) => {
    let dayDate = new Date(ele.dt * 1000);

    if (!dayName.includes(DAYS[dayDate.getDay()])) {
      {
        dayName.push(DAYS[dayDate.getDay()]);
        icn.push(ele.weather[0].icon);
        temp.push(ele.main.temp);
      }
    }
  });
  dayName.forEach((ele, index) => {
    MAIN_OBJECT.push({ name: ele, icon: icn[index], temp: temp[index] });
  });

  return (
    <section
      layoutId='first'
      className='col-span-2 max-[850px]:w-full row-span-2 shadow px-6 py-3 details flex flex-col justify-start'
    >
      {MAIN_OBJECT.map((ele, index) => {
        return (
          <>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              key={index}
              className={`flex justify-between items-center h-1/6 ${
                index === 0 && "first-day font-bold relative"
              }`}
            >
              <h5>{ele.name}</h5>
              <div className='flex items-center gap-1'>
                <img
                  className='w-[40px]'
                  src={`https://openweathermap.org/img/w/${ele.icon}.png`}
                  alt='icon'
                />
                <div>{(ele.temp - 272.15).toFixed()}°C</div>
              </div>
            </motion.div>
          </>
        );
      })}
    </section>
  );
};

export default Forcast;
