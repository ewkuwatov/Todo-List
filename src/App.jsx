// App.jsx
import { useEffect, useState } from "react"
import TodoItem from "./components/TodoItem"

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
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
        <TodoItem
          task={task}
          setTask={setTask}

          todos={todos}
          setTodos={setTodos}
          
          filter={filter}
          setFilter={setFilter}

          addTask={addTask}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          filterTask={filterTask}
        />
    </div>
  )
}

export default App
