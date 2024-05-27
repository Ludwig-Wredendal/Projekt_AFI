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
        <br></br>
        
        <div>Play a football game with your friends</div>
        <div><button>Participants 2</button> {/*Hämtar ny aktivitet från redan bestämt typ*/}
      <button>Participants 3</button> {/*Hämtar ny aktivitet från redan bestämt typ*/}
      <button>Participants 4</button> {/*Hämtar ny aktivitet från redan bestämt typ*/}</div>
      </header>
    </div>
  );
}

export default App;
