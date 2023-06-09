import React, { useState } from "react";
import axios from "axios";
import "../styles/Hero.css";
import WeatherIcon from "./WeatherIcon.js";
import Time from "react-time-format";

function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({});

  const apiKey = "244c95t3fo3db4e37613c8eecb30fba3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query="Valencia"&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      icon: response.data.condition.icon,
      time: response.data.time * 1000,
    });
  }

  return (
    <div>
      <h4>
        {Math.round(weatherData.temperature)}°C,{" "}
        <Time value={weatherData.time} format="hh:mm" />
      </h4>
      <WeatherIcon code={weatherData.icon} size={100} />
    </div>
  );
}
export default CurrentWeather;
