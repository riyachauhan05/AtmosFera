import React from 'react';

const WeatherDisplay = ({ weather }) => {
  const { name, main, weather: weatherInfo } = weather;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Weather: {weatherInfo[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
