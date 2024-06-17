import React, { useState } from 'react'

import './App.css'

import TodoTable from './component/TodoTable'

import NewTodoForm from './component/NewTodoForm'

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false)

  const [todo, setTodo] = useState([
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },

    { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two' },

    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One' },

    {
      rowNumber: 4,
      rowDescription: 'Charge phone battery',
      rowAssigned: 'User One',
    },
  ])

  const addTodo = (description, assigned) => {
    let rowNumber = 0

    if (todo.length > 0) {
      rowNumber = todo[todo.length - 1].rowNumber + 1
    } else {
      rowNumber = 1
    }

    const newTodo = {
      rowNumber: rowNumber,

      rowDescription: description,

      rowAssigned: assigned,
    }

    setTodo((todo) => [...todo, newTodo])
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todo.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber
    })

    setTodo(filtered)
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's</div>

        <div className='card-body'>
          <TodoTable todo={todo} deleteTodo={deleteTodo} />

          <button
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
            className='btn btn-primary'
          >
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>

          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  )
}

export default App
