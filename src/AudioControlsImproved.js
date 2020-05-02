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

const Control = ({ controlName, increase, decrease, value }) => {
  // const [value, setValue] = useState(0);

  // const increase = () => {
  //   setValue((val) => val + 1);
  // };

  // const decrease = () => {
  //   setValue((val) => val - 1);
  // };

  return (
    <div>
      <button onClick={decrease}>-</button>
      {value}
      <button onClick={increase}>+</button>
      {controlName}
    </div>
  );
};

const AudioControlsImproved = () => {
  const [allControls, setAllControls] = useState({
    volume: 0,
    bass: 0,
    mid: 0,
    treble: 0,
  });

  const alterControl = (name, by = 1) => {
    return () => {
      setAllControls((allControlsObj) => ({
        ...allControlsObj,
        // By putting name in brackets, this refers to the key in the existing object
        [name]: allControlsObj[name] + by,
      }));
    };
  };

  return (
    <div>
      <Control
        controlName="VOLUME"
        value={allControls.volume}
        increase={alterControl("volume")}
        decrease={alterControl("volume", -1)}
      />
      <Control
        controlName="TREBLE"
        value={allControls.treble}
        increase={alterControl("treble")}
        decrease={alterControl("treble", -1)}
      />
      <Control
        controlName="MID"
        value={allControls.mid}
        increase={alterControl("mid")}
        decrease={alterControl("mid", -1)}
      />
      <Control
        controlName="BASS"
        value={allControls.bass}
        increase={alterControl("bass")}
        decrease={alterControl("bass", -1)}
      />
    </div>
  );
};

export default AudioControlsImproved;
