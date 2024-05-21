import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherDisplay = ({ setTemperature }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
          params: {
            latitude: 63.828333,
            longitude: 20.270556,
            hourly: 'temperature_2m',
            timezone: 'Europe/Berlin',
            forecast_days: 1
          }
        });
        const temperatures = response.data.hourly.temperature_2m;
        const maxTemperature = Math.max(...temperatures);
        setWeatherData(response.data);
        setTemperature(maxTemperature);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [setTemperature]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  //const maxTemperature = Math.max(...weatherData.hourly.temperature_2m);

  return (
    <div> 
      {/*<ul>
        {weatherData.hourly.temperature_2m.map((temp, index) => (
          <li key={index}>Hour {index}: {temp}°C</li>
        ))}
      </ul>*/}
    </div>
  );
};

export default WeatherDisplay;
