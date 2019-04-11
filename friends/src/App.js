import React, { Component } from 'react'

import Login from './login/'
import Friends from './friends/'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <Login />
        <Friends />
      </>
    )
  }
}

export default App
