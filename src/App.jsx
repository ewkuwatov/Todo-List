// App.jsx

import { useEffect, useState } from "react"

function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const stored = localStorage.getItem('todos')
    if(stored) {
      setTodos(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTask = (e) => {
    e.preventDefault()
    if (task.trim() === '') return
  
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    }

    setTodos([...todos, newTodo])
    setTask("")
  }

  const toggleTask = (id) => {
    const updateTodos = todos.map(todo => (
      todo.id === id ? {...todo, completed: !todo.completed } : todo
    ))
    setTodos(updateTodos)
  }

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => (todo.id !== id)))
  }

  const filterTask = todos.filter(todo => {
    if(filter === 'active') return !todo.completed
    if(filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Todo List
        </h1>

        <form onSubmit={addTask} className="flex gap-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Введите задачу..."
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Add
          </button>
        </form>

        <div className="flex justify-center gap-2 mb-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === 'active'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === 'completed'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            Completed
          </button>
        </div>

        <ul className="space-y-2">
          {filterTask.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-md shadow-sm"
            >
              <span
                onClick={() => toggleTask(todo.id)}
                className={`cursor-pointer flex-1 ${
                  todo.completed ? 'line-through text-gray-400' : ''
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTask(todo.id)}
                className="text-red-500 hover:text-red-700 text-sm ml-4"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
