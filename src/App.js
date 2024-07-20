import React, { useState } from 'react';
import GridLayout from './GridLayout';
import './App.css';

const App = () => {
  const [numParticipants, setNumParticipants] = useState(6);

  return (
    <div className="App">
      <h1>Participant Grid Layout</h1>
      <input
        type="number"
        min="1"
        max="10"
        value={numParticipants}
        onChange={(e) => setNumParticipants(Number(e.target.value))}
      />
      <GridLayout numParticipants={numParticipants} />
    </div>
  );
};

export default App;
