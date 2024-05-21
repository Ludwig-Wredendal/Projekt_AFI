import React from 'react';
import WeatherAndActivity from './components/WeatherAndActivity.js';
import ParticipantDisplay from './components/ParticipantDisplay.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to this unique activity generator!</h2>
        <h2>Based on the outside temperature we will decide your type and activity.</h2>
        <WeatherAndActivity />
        <ParticipantDisplay />
      </header>
    </div>
  );
}

export default App;
