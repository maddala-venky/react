import React, { Component } from 'react'

 class LifeCycleA extends Component {
    constructor(props) {
    super(props)

    this.state = {
        name: 'venky'
  
    }
    console.log('LifeCycleA constructor')
}

  render() {
    return (
      <div>LifeCycleA</div>
    )
  }
}

export default LifeCycleA