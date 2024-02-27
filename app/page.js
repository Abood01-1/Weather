"use client";
import { getData } from "./api/location";
import VideoPlayer from "./components/VideoLayout/VideoPlayer";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import City from "./components/City/City";
import { getWeather } from "./api/weather";
import Details from "./components/details";

export default function Home() {
  const [city, setCity] = useState("Madrid");
  const [weather, setWeather] = useState({
    list: [{ main: { temp: 0 }, weather: [{ main: "clean" }], dt: 0 }],
  });
  const [hours, setHours] = useState(0);
  const [data, setData] = useState({ lat: 0, lon: 0, name: "" });

  useEffect(() => {
    let location = getData(city);
    location.then((ele) => {
      setData({ lat: ele[0].lat, lon: ele[0].lon, name: ele[0].name });
    });
  }, [city]);

  useEffect(() => {
    let weatherData = getWeather(data.lat, data.lon);
    weatherData.then((ele) => {
      setWeather(ele);
    });
    let b = new Date(weather.list[0].dt * 1000);
    let hour = b.getUTCHours();
    setHours(hour);
  }, [data]);
  return (
    <>
      <VideoPlayer hours={hours} bg={weather?.list[0]?.weather[0].main} />
      <main className='w-full h-dvh'>
        <Nav
          name={data.name}
          temp={weather.list[0].main.temp - 273.15}
          des={weather.list[0].weather[0].main}
          setCity={setCity}
        />

        <Details
          timeZone={weather?.city?.timezone}
          sunSet={weather?.city?.sunset}
          sunRise={weather?.city?.sunrise}
          weather={weather?.list}
        />
      </main>
    </>
  );
}
