import React, { Component } from 'react'

class Form extends Component {

  constructor(props){
    super(props)

    this.state ={
    username: '',
    comments : '',
    topic: ''
    }
    
  }

  handleUsernameChange = event => {
    console.log("Username changed")
    this.setState({
      username: event.target.value
    })
  }
  
handleCommentsChange = event => {
  console.log("Comment has been changed");
  this.setState({
    comments: event.target.value
  })
}

handleTopicChange = event => {
  console.log("Topic has been changed");
  this.setState({
    topic: event.target.value
  })
}
handleSubmit = event => {
  alert(`Hello this is ${this.state.username} I'm a ${this.state.topic} ${this.state.comments}`)
  event.preventDeafualt()
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div>
          <label>username</label>
          <input type="text"  value={this.setState.username}
      onChange={this.handleUsernameChange} />
        </div>

        <div>
          <label>Comments</label>
          <input type="text" value={this.setState.comments}
          onChange={this.handleCommentsChange} />
        </div>

        <div>
          <label>Topic</label>
          <select  onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="Angular">Angular</option>
            <option value="java">Java</option>
          </select>
          <button type="submit">Submit</button>
        </div>
        </form>
  )
 }
  }

export default Form