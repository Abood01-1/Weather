"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import City from "../City/City";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Nav = ({ setCity, name, temp, des }) => {
  const [cityName, setCityName] = useState("Madrid");
  function handleSubmit(e) {
    e.preventDefault();
    setCity(cityName);
    toast("Wait For Getting Data", {
      position: "top-right",
      type: "warning",
      autoClose: 2000,
    });
  }
  useEffect(() => {
    setTimeout(() => {
      toast(
        "Data Has Been Accessed Successfully",
        {
          position: "top-right",
          type: "success",
          autoClose: 2000,
        },
        2000
      );
    });
  }, [name]);

  let chosen = false;
  return (
    <>
      <ToastContainer toastStyle={{ backgroundColor: "#b6b6b488" }} />
      <nav className='flex justify-between items-center w-full max-[580px]:px-7 px-14 py-5'>
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className='font-bold max-[580px]:text-xs max-[580px]:w-1/3'
        >
          Lively Weather (beta)
        </motion.h1>
        <City name={name} temp={temp} des={des} />
        <motion.form
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          onSubmit={(e) => handleSubmit(e)}
          className='relative flex w-64 max-[580px]:w-1/3'
        >
          <input
            placeholder='serach for city...'
            onChange={(e) => setCityName(e.target.value)}
            className='w-full shadow rounded-full outline-none appearance-none text-sm px-3 py-2 text-white placeholder-white'
            type='text'
          />
          <svg
            onClick={handleSubmit}
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='white'
            style={{ top: "30%" }}
            className='bi bi-search absolute cursor-pointer right-1 mx-2'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
          </svg>
        </motion.form>
      </nav>
    </>
  );
};

export default Nav;
