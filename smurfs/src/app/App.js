import React, { Component } from 'react'

import './App.css'
import Smurfs from '../smurfs/'
import Form from '../form'

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="app">
        {this.props.isFetching && 'Fetching data ...'}
        {this.props.smurfs ? <Smurfs /> : 'No data'}
        <Form />
      </div>
    )
  }
}

export default App
