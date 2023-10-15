import React from 'react';
import useWeather from '../../../hooks/useWeather';

const WeatherForecast = ({ location, lat, lon }) => {
  const weatherForecast = useWeather(location, lat, lon);
  console.log(weatherForecast);
  //   console.log(datetime, temperature, description);

  return (
    <div style={{ zIndex: '10000' }}>
      <h2>Прогноз погоды на ближайшие 3 часа ({location})</h2>
      {weatherForecast ? (
        <ul>
          {weatherForecast.map(({ datetime, temperature, description }) => (
            <li key={datetime}>
              <strong>{datetime}</strong> - Температура: {temperature}°C, Описание: {description}
            </li>
          ))}
        </ul>
      ) : (
        <p>Загрузка прогноза погоды...</p>
      )}
    </div>
  );
};

export default WeatherForecast;
