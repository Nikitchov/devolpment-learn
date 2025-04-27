import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTasks, setDifficulty } from '../redux/practiceSlice.js';
import TaskCard from './TaskCard.jsx';
import CodeEditor from './CodeEditor.jsx';

function Practice() {
  const dispatch = useDispatch();
  const { tasks, difficulty } = useSelector(state => state.practice);

  useEffect(() => {
    fetch('/js_tasks.json')
      .then(res => res.json())
      .then(data => dispatch(setTasks(data)))
      .catch(() => console.log('Error loading tasks'));
  }, [dispatch]);

  const filteredTasks = tasks.filter(t => 
    difficulty === 'all' || t.difficulty === difficulty
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 animate__animated animate__fadeInDown">Practice</h1>
      <div className="mb-6">
        <select 
          value={difficulty} 
          onChange={(e) => dispatch(setDifficulty(e.target.value))}
          className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-bold text-gray-800">Tasks</h2>
          {filteredTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
          <h2 className="text-xl font-bold mt-6 text-gray-800">Mini Projects</h2>
          <div className="bg-white p-3 rounded-lg shadow-md animate__animated animate__fadeIn">
            <Link to="/project/todo" className="text-blue-500 hover:underline">To-Do List</Link>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
}

export default Practice;