import React, { Component } from "react";

class contextF extends Component {
  render() {
    return (
      <userConsumer>
        {(username) => {
          return <div> Hello {username}</div>;
        }}
      </userConsumer>
    );
  }
}

export default contextF;
