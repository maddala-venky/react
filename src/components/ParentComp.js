import React, { Component } from "react";
import MemoComp from "./MemoComp";
//import PureComponent from './PureComponent'
//import RegComp from './RegComp'

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "venky",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "venky",
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        ParentComponent
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
