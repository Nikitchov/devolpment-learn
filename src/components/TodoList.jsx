import React, { useEffect } from 'react'; // Import useEffect
import { useSelector, useDispatch } from 'react-redux';
import { setInput, addTodo, toggleTodo, setTodos } from '../redux/todoSlice.js';
import { loadFromStorage } from '../utils/storage.js';

function TodoList() {
  const dispatch = useDispatch();
  const { todos, input } = useSelector((state) => state.todo);

  // Load saved todos from LocalStorage when the component mounts
  useEffect(() => {
    const savedTodos = loadFromStorage('todo', []);
    dispatch(setTodos(savedTodos));
  }, [dispatch]);

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo());
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">To-Do List</h1>
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => dispatch(setInput(e.target.value))}
            className="p-3 border rounded-lg flex-grow"
            placeholder="Add a new task..."
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`p-3 mb-2 rounded-lg shadow-md ${
                todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
              }`}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;