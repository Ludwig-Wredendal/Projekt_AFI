import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';
import DataDisplay from './DataDisplay';

const WeatherAndActivity = () => {
  const [temperature, setTemperature] = useState(null);
  const [activityType, setActivityType] = useState('');
  const [fetchActivityTrigger, setFetchActivityTrigger] = useState(false);
  const [participants, setParticipants] = useState('');


  const determineActivityType = (temp) => {
    let activities;

    if (temp < 15) {
        activities = ['busywork', 'education', 'relaxation'];
    } else if (temp < 20) {
        activities = ['cooking', 'diy', 'music'];
    } else if (temp < 25) {
        activities = ['recreational', 'social'];
    } else {
        activities = ['charity'];
    }

    const activityType = activities[Math.floor(Math.random() * activities.length)];
    return activityType;
  };

  const determineNrOfParticipants = (event) => {
    const value = event.target.value;
    setParticipants(value);
  };
  

  useEffect(() => {
    if (temperature !== null) {
        setActivityType(determineActivityType(temperature));
    }
  }, [temperature]);

  const fetchNewActivity = () => {
    setFetchActivityTrigger(prev => !prev);
  };

  return (
    <div>
      <WeatherDisplay setTemperature={setTemperature} />
      {temperature !== null && (
        <div>
          <h3>Highest Temperature Today: {temperature}°C</h3>
          <DataDisplay activityType={activityType} fetchActivityTrigger={fetchActivityTrigger} />
          <button onClick={fetchNewActivity}>New activity</button> {/*Hämtar ny aktivitet från redan bestämt typ*/}
        </div>
      )}
      <div>
        <label htmlFor="participants">Number of Participants:</label>
        <input
          type="number"
          id="participants"
          value={participants}
          onChange={determineNrOfParticipants}
          min="1"
        />
      </div>
    </div>
  );
};

export default WeatherAndActivity;
