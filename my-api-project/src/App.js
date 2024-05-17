import React from 'react';
import DataDisplay from './components/DataDisplay.js';
import WeatherDisplay from './components/WeatherDisplay.js';
import WeatherAndActivity from './components/WeatherAndActivity.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to this unique activity generator!</h2>
        <h2>Based on the outside temperature we will decide your activity.</h2>
        <WeatherAndActivity />
        {/*<DataDisplay /> */}
        {/*<WeatherDisplay />*/}
      </header>
    </div>
  );
}

export default App;
