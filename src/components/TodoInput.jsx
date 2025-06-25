import { motion, AnimatePresence } from 'framer-motion'

const TodoInput = ({ task, setTask, addTask }) => {
  return (
    <form onSubmit={addTask} className="flex gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Введите задачу..."
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add
      </motion.button>
    </form>
  )
}

export default TodoInput
