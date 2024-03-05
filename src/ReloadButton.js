import React from "react";

class ReloadButton extends React.Component {
  shouldComponentUpdate = () => {
    return false;
  };
  render() {
    console.log("button rendered");
    return <button onClick={this.props.onClick}>Reload User Data</button>;
  }
}

export default ReloadButton;
