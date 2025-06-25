import FilterButtons from "./FilterButtons";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


const TodoItem = ({
  task,
  setTask,
  filter,
  setFilter,
  addTask,
  toggleTask,
  deleteTask,
  filterTask,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg max-w-md p-6">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Todo List
      </h1>

      <TodoInput task={task} setTask={setTask} addTask={addTask} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        filterTask={filterTask}
      />
    </div>
  )
}
 
export default TodoItem;