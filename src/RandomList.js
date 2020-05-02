import React, { useState } from "react";

// Create a RandomList component that shows a button, and a list of random numbers.
// When you click the button, add another random number to the list.
// Store the array of numbers with useState. The initial state should be an empty array.

// antipattern - passes objects in props

const RandomList = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateNumber = () => {
    const newNumber = Math.round(Math.random() * 10);
    setRandomNumbers((numberArr) => [...numberArr, newNumber]);
  };

  return (
    <div>
      <h1>Add random number</h1>
      <button onClick={generateNumber}>Add random number</button>
      <h1>Random numbers</h1>
      <ul>
        {randomNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomList;
