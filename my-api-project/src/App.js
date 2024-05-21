import React from 'react';
import WeatherAndActivity from './components/WeatherAndActivity.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to this unique activity generator!</h1>
        <p>Based on the outside temperature we will decide your type and activity.</p>
        <WeatherAndActivity />
      </header>
    </div>
  );
}

export default App;
