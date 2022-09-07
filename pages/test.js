import React, {Component} from 'react'

class Example extends Component {
  state = {
    count: 0,
  }
  componentDidMount() {
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`)
    }, 3000)
  }
  componentDidUpdate() {
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`)
    }, 3000)
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Click me
        </button>
      </div>
    )
  }
}

export default Example
