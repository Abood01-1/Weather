import React from "react";
let API_KEY = "ff1b9a521c79fd1e8a8f4e962c17c9b6";
export const getWeather = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ff1b9a521c79fd1e8a8f4e962c17c9b6`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
