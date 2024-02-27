"use client";
import React from "react";
import Forcast from "./Forcast/Forcast";
import TimeLine from "./TimeLine/TimeLine";
import Temperture from "./Temperture/Temperture";
import Sun from "./Sun/Sun";
import Humidity from "./Humidity/Humidity";
import Wind from "./Wind/Wind";
import Pressure from "./Pressure/Pressure";

const Details = ({ weather, timeZone, sunSet, sunRise }) => {
  let a = [];
  let DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let time = [];
  weather.map((ele, index) => {
    if (index < 8) time.push(ele);
  });
  return (
    <section
      style={{ height: "calc(100% - 116px)" }}
      className='grid grid-cols-6 grid-rows-4 max-[850px]:flex max-[850px]:justify-center  max-[850px]:flex-wrap text-center w-full gap-4 max-[580px]:px-7 px-14 py-1'
    >
      <Forcast days={weather} />
      <TimeLine time={time} />

      <Temperture
        maxTemp={weather[0].main.temp_max}
        minTemp={weather[0].main.temp_min}
      />
      <Sun
        dt={weather[0].dt}
        timeZone={timeZone}
        sunRise={sunRise}
        sunSet={sunSet}
      />
      <Humidity humidity={weather[0].main.humidity} />

      <Wind
        windSpeed={weather[0]?.wind?.speed}
        windDeg={weather[0]?.wind?.deg}
      />
      <Pressure press={weather[0].main.pressure} />
    </section>
  );
};

export default Details;
