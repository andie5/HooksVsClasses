import React from "react";
import ReactDOM from "react-dom";

class OneTimeButton extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    // The handler won't be called if the button
    // is disabled, so if we got here, it's safe
    // to trigger the click.
    this.props.onClick();

    // Ok, no more clicking.
    this.setState({ clicked: true });
  };

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.state.clicked}>
        You can only click me once
      </button>
    );
  }
}

ReactDOM.render(
  <OneTimeButton onClick={() => alert("hi")} />,
  document.querySelector("#root")
);
