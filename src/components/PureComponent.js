import React, { Component } from 'react'

 class PureComponent extends Component {
  render() {
    console.log('pure Comp render')
    return (
      <div>
        PureComponent {this.props.name}
        </div>
    )
  }
}

export default PureComponent