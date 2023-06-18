import React, { Component } from 'react'
import TodoItems from './Todoitems';
import PropTypes from 'prop-types';

 class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => 
    (
      <TodoItems key={todo.id} todo={todo} />
    ));
  }
 }
 console.log('hello')
  // propTypes
  Todos.propTypes = {
    todos:PropTypes.array.isRequired
  }

export default Todos;