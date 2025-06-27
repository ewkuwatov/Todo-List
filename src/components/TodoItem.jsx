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
  loading,
  editTask,
  edit,
  setEdit,
  editingId,
  setEditingId,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg max-w-md p-6">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Todo List
      </h1>

      <TodoInput
        task={task}
        setTask={setTask}
        addTask={addTask}
        loading={loading}
      />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        task={task}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        filterTask={filterTask}
        editTask={editTask}
        edit={edit}
        setEdit={setEdit}
        editingId={editingId}
        setEditingId={setEditingId}
      />
    </div>
  )
}
 
export default TodoItem;