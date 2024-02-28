import React from "react";
let API_KEY = "ff1b9a521c79fd1e8a8f4e962c17c9b6";

export const getData = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }

  // return res.json();
};
