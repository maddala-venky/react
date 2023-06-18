import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "hi venky",
    };
  }

  changeMessage() {
    this.setState({
      message: "welcome to react ",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>subscriber</button>
      </div>
    );
  }
}

export default Message;
