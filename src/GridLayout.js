import React, { useState } from 'react';
import './GridLayout.css';

const GridLayout = ({ numParticipants }) => {
  const grids = Array.from({ length: numParticipants }, (_, index) => index);

  return (
    <div className="grid-container">
      {grids.map((_, index) => (
        <div key={index} className={`grid-item ${index === numParticipants - 1 ? 'self-view' : ''}`}>
          {index === numParticipants - 1 ? 'Self View' : `Participant ${index + 1}`}
        </div>
      ))}
    </div>
  );
};

export default GridLayout;
