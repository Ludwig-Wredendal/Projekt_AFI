import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';
import DataDisplay from './DataDisplay';

const WeatherAndActivity = () => {
  const [temperature, setTemperature] = useState(null);
  const [activityType, setActivityType] = useState('recreational');

  // Determine activity type based on temperature
  const determineActivityType = (temp) => {
    if (temp < 10) {
      return 'relaxation';
    } else if (temp < 20) {
      return 'recreational';
    } else {
      return 'social';
    }
  };

  // Update activity type when temperature changes
  React.useEffect(() => {
    if (temperature !== null) {
      setActivityType(determineActivityType(temperature));
    }
  }, [temperature]);

  return (
    <div>
      <WeatherDisplay setTemperature={setTemperature} />
      {temperature !== null && (
        <div>
          <h3>Highest Temperature Today: {temperature}°C</h3>
          <DataDisplay activityType={activityType} />
        </div>
      )}
    </div>
  );
};

export default WeatherAndActivity;
