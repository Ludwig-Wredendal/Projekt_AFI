import React from 'react';
import DataDisplay from './DataDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Willkommen</h1>

        <WeatherDisplay />
        <DataDisplay />
      </header>
    </div>
  );
}

export default App;
