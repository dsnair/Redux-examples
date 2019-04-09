import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [newTodo, setNewTodo] = useState('')
  const [todoArr, setTodoArr] = useState([])

  const changeNewTodo = e => setNewTodo(e.target.value)

  const submitNewTodo = e => {
    e.preventDefault()
    if (!newTodo) return
    setTodoArr([...todoArr, { todo: newTodo, done: false }])
    setNewTodo('')
  }

  return (
    <div className="app">
      <form onSubmit={submitNewTodo}>
        <input
          onChange={changeNewTodo}
          value={newTodo}
          type="text"
          placeholder="+ New Todo"
        />
      </form>
    </div>
  )
}

export default App
