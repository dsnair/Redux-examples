import React, { Component } from 'react'

import './App.css'
import Characters from '../characters/'

class App extends Component {
  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
    return (
      <React.Fragment>
        {this.props.isFetching && 'Fetching data ...'}
        {this.props.characters ? <Characters /> : 'No data'}
      </React.Fragment>
    )
  }
}

export default App
