const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center gap-4 mb-4">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-1 rounded-md text-sm ${
          filter === 'all'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('active')}
        className={`px-4 py-1 rounded-md text-sm ${
          filter === 'active'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-4 py-1 rounded-md text-sm ${
          filter === 'completed'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        Completed
      </button>
    </div>
  )
}
 
export default FilterButtons;