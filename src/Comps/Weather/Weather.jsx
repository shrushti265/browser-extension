import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css"

const Weather = () => {
  const [showWeather, setShowWeather] = useState();

  const weatherInitialState = {
    icon: "",
    location: "",
    status: "",
    temp: "",
    feelsLike: "",
    sunset: "",
    sunrise: "",
  };

  const [weather, setWeather] = useState(weatherInitialState);

  const API_KEY = "3691720e7598221e29e3be26020d1483";

  const getAPI = (lat, lon) => {
    let API = "";
    if (lat === undefined || lon === undefined) {
      API = `https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${API_KEY}`;
    } else {
      API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    }
    return API;
  };

  const fetchWeather = async (lat, lon) => {
    const API = getAPI(lat, lon);

    try {
      const res = await axios.get(API);
      const data = res.data;
      setWeather({
        icon: data.weather[0].icon,
        location: data.name,
        status: data.weather[0].description,
        temp: Math.round(res.data.main.temp - 273.15),
        wind: data.wind.speed,
        feelsLike: Math.round(data.main.feels_like - 273.15),
        humidity: data.main.humidity,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const success = (loc) => {
    const crd = loc.coords;
    fetchWeather(crd.latitude, crd.longitude);
  };

  const error = () => {
    fetchWeather();
  };

  const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  useEffect(() => {
    fetchWeather();
    getGeoLocation();
  }, []);

  return (
    <div className="weather_data">
      <span className="flex-center">
        <span>
          <img
            alt="weather-icon"
            src={`http://openweathermap.org/img/w/${weather.icon}.png`}
            width="60"
            height="40"
          />
        </span>
        <span>{weather.temp}°</span>
      </span>
      <span className="flex-center">
        <span>{weather.location}</span>
      </span>
    </div>
  );
};

export { Weather };
// 3691720e7598221e29e3be26020d1483
