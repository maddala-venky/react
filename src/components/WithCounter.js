/* eslint-disable no-unused-vars */
import React from "react";

const WithCounter = (WrappedComponent, incrementNumber) => {
  class HocComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return HocComp;
};

export default WithCounter;
