import React, { useReducer } from 'react'
import './App.css'

const initialState = {
  newTodo: '',
  todoArr: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEW_TODO_ADDED':
      return {
        ...state,
        newTodo: action.newTodo
      }

    case 'NEW_TODO_SUBMITTED':
      if (!state.newTodo) return state
      return {
        ...state,
        newTodo: '',
        todoArr: [
          ...state.todoArr,
          { todo: state.newTodo, done: false, id: state.todoArr.length }
        ]
      }

    case 'DONE_TOGGLED':
      const newTodoArr = [...state.todoArr]
      newTodoArr.splice(action.id, 1, {
        ...state.todoArr[action.id],
        done: !state.todoArr[action.id].done
      })
      return {
        ...state,
        todoArr: newTodoArr
      }

    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addNewTodo = e =>
    dispatch({ type: 'NEW_TODO_ADDED', newTodo: e.target.value })

  const submitNewTodo = e => {
    e.preventDefault()
    dispatch({ type: 'NEW_TODO_SUBMITTED' })
  }

  return (
    <div className="app">
      {state.todoArr.map(obj => (
        <div className="todoArr" key={obj.id}>
          <input
            value={obj.todo}
            style={
              obj.done
                ? {
                    textDecoration: 'line-through',
                    textDecorationColor: 'orangered',
                    textDecorationStyle: 'wavy'
                  }
                : { textDecoration: 'none' }
            }
            type="text"
            readOnly
          />
          <button
            onClick={() => dispatch({ type: 'DONE_TOGGLED', id: obj.id })}
          >
            &#10003;
          </button>
        </div>
      ))}

      <form onSubmit={submitNewTodo}>
        <input
          onChange={addNewTodo}
          value={state.newTodo}
          type="text"
          placeholder="&#x2B; New Todo"
        />
      </form>
    </div>
  )
}

export default App
