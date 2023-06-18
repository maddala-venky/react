import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItems extends Component {
  render() {
  console.log(this.props.todo)

    return (
      <div>
        <p>{this.props.todo?.title}</p>
      </div>
    )
  }
}
console.log('hello')

  // propTypes
  TodoItems.propTypes = {
    todo:PropTypes.object.isRequired
  }

export default TodoItems