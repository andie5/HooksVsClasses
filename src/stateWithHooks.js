import React, { useState } from "react";
import ReactDOM from "react-dom";

function OneTimeButton({ onClick }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    onClick();

    // Ok, no more clicking.
    setClicked(true);
  };

  return (
    <button onClick={handleClick} disabled={clicked}>
      You can only click me once
    </button>
  );
}

ReactDOM.render(
  <OneTimeButton onClick={() => alert("hi")} />,
  document.querySelector("#root")
);
