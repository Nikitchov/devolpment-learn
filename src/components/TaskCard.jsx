import { setCurrentTask } from '../redux/practiceSlice';

function TaskCard({ task }) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(setCurrentTask(task))}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          dispatch(setCurrentTask(task));
        }
      }}
      className="w-full p-3 bg-white rounded-lg shadow-md mb-3 text-left cursor-pointer hover:bg-gray-100 transition-all animate__animated animate__fadeIn"
      aria-label={`Select task: ${task.title}`}
    >
      <span>
        <span className="text-lg font-semibold text-gray-800">{task.title}</span>
        <span className="text-sm text-gray-600"> ({task.difficulty})</span>
      </span>
    </button>
  );
}

export default TaskCard;