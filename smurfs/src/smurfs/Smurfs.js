import React from 'react'
import './Smurfs.css'

const Smurfs = props => (
  <div className="smurfs">
    {props.smurfs.map((smurf, index) => (
      <div className="smurf" key={index}>
        <h3>{smurf.name}</h3>
        <p>{smurf.height} cm tall</p>
        <p>{smurf.age} smurf years old</p>
      </div>
    ))}
  </div>
)

export default Smurfs
