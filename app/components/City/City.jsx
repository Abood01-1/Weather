import React from "react";
import { motion } from "framer-motion";
const City = ({ name, temp, des }) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className='flex justify-center gap-5 items-end  max-[580px]:flex-col max-[580px]:items-center max-[580px]:gap-1 max-[580px]:w-1/3'
    >
      <h1 className='font-bold text-3xl max-[580px]:text-lg'>{name}</h1>
      <h2 className='text-1xl max-[580px]:text-sm '>
        {temp.toFixed()}℃<span className='px-2 opacity-90'>({des})</span>
      </h2>
    </motion.div>
  );
};

export default City;
