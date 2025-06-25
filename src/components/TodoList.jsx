import { motion, AnimatePresence } from 'framer-motion'

const TodoList = ({ filterTask, toggleTask, deleteTask }) => {
  return (
    <ul className="space-y-2">
      <AnimatePresence mode="popLayout">
        {filterTask.map((todo) => (
          <motion.li
            key={todo.id}
            layout
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-md shadow-sm"
          >
            <motion.span
              onClick={() => toggleTask(todo.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`cursor-pointer flex-1 ${
                todo.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              {todo.text}
            </motion.span>
            <motion.button
              onClick={() => deleteTask(todo.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-red-500 hover:text-red-700 text-sm ml-4"
            >
              Удалить
            </motion.button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}

export default TodoList
