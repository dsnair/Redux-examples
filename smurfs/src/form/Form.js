import React from 'react'
import './Form.css'

const Form = props => (
  <form onSubmit={props.postSmurf} className="smurfForm">
    <input
      onChange={e => props.handleInput({ name: e.target.value })}
      placeholder="Name"
      type="text"
      value={props.name}
    />
    <input
      onChange={e => props.handleInput({ age: e.target.value })}
      placeholder="Age"
      type="number"
      value={props.age}
    />
    <input
      onChange={e => props.handleInput({ height: e.target.value })}
      placeholder="Height"
      type="number"
      value={props.height}
    />
    <button type="submit">Add Smurf</button>
  </form>
)

export default Form
