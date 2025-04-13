import React from 'react';
import './App.css';

function App() {
  const llamaFacts = [
    "Llama poo produces little to no odor",
    "Llamas are members of the camelid family",
    "They can carry up to 25–30% of their body weight",
    "Llamas communicate with a series of ear, body, and tail postures",
    "Llamas hum to each other to communicate",
    "They have three stomach compartments",
    "Llamas don't bite, but they can spit when threatened",
    "Llamas make great guard animals for livestock",
    "A group of llamas is called a 'cria herd'",
    "Llamas are smarter than alpacas" 
  ];

  const showLastFact = true;

  return (
    <div className="llama-container">
      <h1>🦙 Amazing Llama Facts</h1>
      <ul>
        {llamaFacts.slice(0, 9).map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
        <li>{showLastFact ? llamaFacts[9] : "Alpacas might disagree..."}</li>
      </ul>
    </div>
  );
}

export default App;