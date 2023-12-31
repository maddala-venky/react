import React, { Component } from 'react'
class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState(
            {
        count : this.State.count + 1
            },
            () => {
                console.log('Callback value', this.state.count)
            }
        )
        console.log(this.state.count)
    }

     incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
     }

  render() {
    return(
    <div>
    <div>count -{this.state.count} </div>
    <button onClick={() => this.incrementFive()}>Icrement</button>
    </div>
    )
  }
}

export default Counter