import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement, incrementIfOdd } from '../actions'
import './Counter.css'

class Counter extends Component {
  incrementIfOdd = () => {
    // Stretch Problem: Implement an increment function that
    // only increments if the counter value is odd
    this.props.incrementIfOdd()
  }

  incrementAsync = () => {
    // Stretch Problem: Implement an increment function that
    // increments after waiting for one second
    setTimeout(() => {
      this.props.increment()
      console.log('I waited 1 second')
    }, 1000)
  }

  render() {
    return (
      <div>
        Clicked: {this.props.count} times
        <p>
          <button
            onClick={() => {
              this.props.increment()
            }}
            className="plus"
          >
            +
          </button>
          <button
            onClick={() => {
              this.props.decrement()
            }}
            className="minus"
          >
            -
          </button>
        </p>
        <button onClick={this.incrementIfOdd} className="odd">
          Increment if Odd
        </button>
        <button onClick={this.incrementAsync} className="async">
          Increment Async
        </button>
      </div>
    )
  }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = state => {
  return {
    count: state.count
  }
}

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(
  mapStateToProps,
  { increment, decrement, incrementIfOdd }
)(Counter)
