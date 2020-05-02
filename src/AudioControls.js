import React, { useState } from "react";

// Create a component called AudioControls with 4 pieces of state:
// “volume”, “bass”, “mid, and”treble”, each storing a value between 1 and 100.
// The app should look something like this:
// – 89 + VOLUME
// – 32 + TREBLE
// – 50 + MID
// – 41 + BASS
// Display each value along with a label and a pair of +/- buttons for increasing and
// decreasing the value.
// Make two separate versions of this component: In the first, store the values in their
//  own individual useState variables. In the second, store the values together in one
// state variable, an object that looks like this:
// {
//     volume: <number>, bass: <number>, mid: <number>, treble: <number>
//     }

const Control = ({ controlName }) => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue((val) => val + 1);
  };

  const decrease = () => {
    setValue((val) => val - 1);
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      {value}
      <button onClick={increase}>+</button>
      {controlName}
    </div>
  );
};

const AudioControls = () => {
  return (
    <div>
      <Control controlName="VOLUME" />
      <Control controlName="TREBLE" />
      <Control controlName="MID" />
      <Control controlName="BASS" />
    </div>
  );
};

export default AudioControls;
