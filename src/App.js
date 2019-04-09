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

  const toggleDone = id => {
    const newTodoArr = [...todoArr]
    newTodoArr.splice(id, 1, {
      ...todoArr[id],
      done: !todoArr[id].done
    })
    setTodoArr(newTodoArr)
  }

  return (
    <div className="app">
      {todoArr.map(obj => (
        <div className="todoArr" key={obj.id}>
          <input
            value={obj.todo}
            style={
              obj.done
                ? { textDecoration: 'line-through', textDecorationColor: 'orangered' }
                : { textDecoration: 'none' }
            }
            type="text"
            readOnly
          />
          <button onClick={() => toggleDone(obj.id)}>&#10003;</button>
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
