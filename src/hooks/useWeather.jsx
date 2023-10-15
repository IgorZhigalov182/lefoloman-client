import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useWeather = (location, lat, lon) => {
  const [weatherForecast, setWeatherForecast] = useState(null);

  useEffect(() => {
    const getWeatherForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=3e0e4f21caf11de059583184893fe187`,
          //   `https://api.openweathermap.org/geo/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=3e0e4f21caf11de059583184893fe187`,
        );

        const { list } = response.data;
        const forecast = list.slice(0, 3).map((item) => ({
          datetime: item.dt_txt,
          temperature: item.main.temp,
          description: item.weather[0].description,
        }));

        setWeatherForecast(forecast);
      } catch (error) {
        console.error(error);
      }
    };

    if (lon) {
      getWeatherForecast();
    }
  }, [lon, lat]);

  return weatherForecast;
};

export default useWeather;
