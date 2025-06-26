// App.jsx
import { useEffect, useState } from "react"
import TodoItem from "./components/TodoItem"

function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true)
        const res = await fetch('http://localhost:3001/todos')

        if (!res.ok) throw new Error('Ошибка загрузки задач')

        const data = await res.json()
        setTodos(data)
        setError(null) // сбрасываем ошибку при успешной загрузке
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTodos()
  }, [])
  

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch('http://localhost:3001/todos')
        const data = await res.json()
        setTodos(data)
      } catch (error) {
        console.error('Ошибка при загрузке задач:', error)
      }
    }
    fetchTodos()
  }, [])

  const addTask = async (e) => {
    e.preventDefault()
    if (task.trim() === '') return
  
    const newTodo = {
      text: task,
      completed: false,
    }

    try {
      const res = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo),
      })

      const createdTodos = await res.json()
      setTodos([...todos, createdTodos])
      setTask('')
    } catch (error) {
      console.error('Ошибка при добавлении задачи:', error)
    }
  }

  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'DELETE',
      })
      setTodos(todos.filter(t => t.id !== id))
    } catch (error) {
      console.error('Ошибка при удалении задачи:', error)
    }
  }

  const toggleTask = async (id) => {
    const todo = todos.find(t => t.id === id)
    if(!todo) return 
    
    try {
      const res = await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !todo.completed }),
      })

      const updated = await res.json()
      setTodos(todos.map(t => t.id === id ? updated : t))
    } catch (error) {
      console.error('Ошибка при переключении состояния:', error)
    }
  }
  
  const filterTask = todos.filter(todo => {
    if(filter === 'active') return !todo.completed
    if(filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      {loading && (
        <div className="text-white text-center mb-4 animate-pulse">
          Загрузка...
        </div>
      )}

      {error && (
        <div className="text-red-400 text-center mb-4">Ошибка: {error}</div>
      )}

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
        loading={loading}
      />
    </div>
  )
}

export default App
