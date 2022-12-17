import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrementCount = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked
          <br /> <span className="counter-num">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <div className="button-container">
          <button
            className="button"
            type="button"
            onClick={this.onIncrementCount}
          >
            Click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
