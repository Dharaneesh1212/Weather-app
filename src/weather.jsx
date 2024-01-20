import { FaWind } from "react-icons/fa";
import { FaWater } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import sun from "../src/images/sun_.png";
import snow from "../src/images/snow.png";
import drizzle from "../src/images/drizzle.png";
import rain from "../src/images/rain.png";
import cloud from "../src/images/cloud_.png";
import { useState } from "react";

const Weather = () => {
  let key = `a5c26a2c7d5253e78e32353bffaf40be`;

  const [icon, setIcon] = useState(cloud);

  const search = async () => {
    const element = document.getElementById("input");
    const input = element.querySelector("input");
    if (input.value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${key}`;

    const response = await fetch(url);
    const data = await response.json();

    const humidity = document.getElementById("humidity");
    const speed = document.getElementById("speed");
    const degree = document.getElementById("degree");
    const country = document.getElementById("country");

    humidity.innerHTML = data.main.humidity + " %";
    speed.innerHTML = data.wind.speed + " km/h";
    degree.innerHTML = data.main.temp + " °c";
    country.innerHTML = data.name;

    if (data.weather.icon === "01d" || data.weather.icon === "01n") {
      setIcon(sun);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setIcon(cloud);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setIcon(drizzle);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setIcon(drizzle);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setIcon(rain);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setIcon(rain);
    } else if (
      data.weather[0].icon === "01d" ||
      data.weather[0].icon === "01n"
    ) {
      setIcon(snow);
    } else {
      setIcon(cloud);
    }
  };

  return (
    <main className="flex items-center justify-center m-10">
      <div className="h-[33rem] w-[25rem] bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-xl">
        <div className="flex items-center justify-center mt-8 gap-4" id="input">
          <input
            type="search"
            placeholder="Search"
            className="h-[2rem] w-[13rem] p-1 font-mono text-base rounded-md outline-none"
          />
          <button
            className="flex items-center justify-center h-[2rem] w-[2rem] text-whit bg-white rounded-lg"
            id="search"
            onClick={() => {
              search();
            }}
          >
            <FaSearch />
          </button>
        </div>
        <div className="flex items-center justify-center flex-col gap-6 m-[3rem]">
          <img src={icon} alt="" className="icons" />
          <span
            className="flex items-center justify-center font-mono text-4xl"
            id="degree"
          >
            0&deg;c
          </span>
          <span
            className="flex items-center justify-center font-serif text-5xl text-white"
            id="country"
          >
            Country
          </span>
        </div>
        <div className="flex items-center justify-around">
          <div className="flex items-center justify-center font-serif text-2xl flex-col gap-2">
            <span className="text-3xl text-white">
              <FaWater />
            </span>
            <span
              className="flex items-center justify-center font-mono text-3xl"
              id="humidity"
            >
              0 %
            </span>
            <p className="text-white">Humidity</p>
          </div>
          <div className="flex items-center justify-center font-serif text-2xl flex-col gap-2">
            <span className="text-3xl text-white">
              <FaWind />
            </span>
            <span
              className="flex items-center justify-center font-mono text-3xl"
              id="speed"
            >
              0 km/h
            </span>
            <p className="text-white">Wind Speed</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Weather;
