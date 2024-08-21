import React from 'react';

const Results = ({ score }) => {
  return (
    <div className="results-container">
      <h2>Your Score: <span>{score}</span></h2>
      <p>Thanks for playing!</p>
    </div>
  );
};

export default Results;
