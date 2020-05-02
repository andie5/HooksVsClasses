import React, { useState } from "react";

const Room = () => {
  const [light, setLight] = useState(false);

  const lightSwitchText = light ? "The room is lit" : "The room is dark";

  //   Turn the light on or off as well as the text of the button
  //   using hooks for functional component
  const handleClick = () => {
    light ? setLight(false) : setLight(true);
  };
  return <button onClick={handleClick}>{lightSwitchText}</button>;
};

export default Room;
