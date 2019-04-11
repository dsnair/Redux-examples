import React from 'react'

const Characters = props =>
  props.characters.map(character => <p key={character.name}>{character.name}</p>)

export default Characters
