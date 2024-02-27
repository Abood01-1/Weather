"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
const Humidity = ({ humidity }) => {
  const raduis = 80;
  const cir = 200;
  const dashArr = raduis * Math.PI * 2;
  let dashOff = dashArr - (dashArr * humidity) / 100;

  return (
    <section className='flex max-[580px]:w-full flex-col justify-between items-center px-6 py-3 details col-span-2 row-span-2'>
      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        style={{
          color: "rgba(255,255,255,0.9)",
        }}
        className='self-start font-bold flex items-center gap-1'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='#ffffff88'
          className='bi bi-moisture'
          viewBox='0 0 16 16'
        >
          <path d='M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a29 29 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a29 29 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001zm0 0-.364-.343zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267' />
        </svg>
        Humidity
      </motion.h3>
      <motion.svg
        initial={{ strokeDashoffset: 0 }}
        whileInView={{ strokeDashoffset: dashOff }}
        transition={{ duration: 0.3, delay: 0.7 }}
        width={cir}
        height={cir}
        viewBox={`0 0 ${cir} ${cir}`}
        className='z-20'
      >
        <circle
          cx={cir / 2}
          cy={cir / 2}
          strokeWidth='12px'
          r={raduis}
          className='fill-none stroke-none'
        ></circle>
        <circle
          strokeOpacity={0.9}
          cx={cir / 2}
          cy={cir / 2}
          style={{
            strokeDasharray: dashArr,

            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          strokeWidth='12px'
          r={raduis}
          transform={`rotate(-90 ${cir / 2}  ${cir / 2})`}
          className='fill-none stroke-current'
        ></circle>

        <text
          fill='rgba(255,255,255,0.9)'
          x='50%'
          y='50%'
          dy='0.3rem'
          textAnchor='middle'
          className='font-bold text-2xl'
        >
          {humidity}%
        </text>
      </motion.svg>
    </section>
  );
};

export default Humidity;
