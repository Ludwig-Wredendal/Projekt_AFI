import React, { useEffect, useState } from 'react';



const WeatherDisplay = ({weatherData,highestTemp }) =>{

  return (
    <div>
      <h1>Weather Data</h1>
      <p>Högsta temperatur för dagen blir: {highestTemp}°C</p>
    </div>
    
  );

};
  export default WeatherDisplay;
  