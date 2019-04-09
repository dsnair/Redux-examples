import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [newTodo, setNewTodo] = useState('')
  const [todoArr, setTodoArr] = useState([])

  const changeNewTodo = e => setNewTodo(e.target.value)

  const submitNewTodo = e => {
    e.preventDefault()
    if (!newTodo) return
    setTodoArr([...todoArr, { todo: newTodo, done: false, id: todoArr.length }])
    setNewTodo('')
  }

  return (
    <div className="app">
      {todoArr.map(obj => (
        <div className="todoArr" key={obj.id}>
          <input value={obj.todo} type="text" readOnly />
          <button>&#10003;</button>
        </div>
      ))}

      <form onSubmit={submitNewTodo}>
        <input
          onChange={changeNewTodo}
          value={newTodo}
          type="text"
          placeholder="&#x2B; New Todo"
        />
      </form>
    </div>
  )
}

export default App
