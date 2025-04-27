import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setQuestions, setTopic, setDifficulty, toggleShowAnswer, nextQuestion } from '../redux/quizSlice.js';
import QuizCard from './QuizCard.jsx';
import { loadFromStorage } from '../utils/storage.js';

function Quiz() {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, topic, difficulty, showAnswer } = useSelector(state => state.quiz);

  useEffect(() => {
    // Загрузка вопросов с сервера
    fetch('http://localhost:3001/api/questions')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка сервера: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(setQuestions(data));
      })
      .catch((err) => console.error('Ошибка загрузки вопросов:', err));

    // Restore from LocalStorage
    const saved = loadFromStorage('quiz', {});
    if (saved) {
      dispatch(setTopic(saved.topic || 'all'));
      dispatch(setDifficulty(saved.difficulty || 'all'));
    }
  }, [dispatch]);

  const filteredQuestions = questions.filter(q =>
    (topic === 'all' || q.topic === topic) &&
    (difficulty === 'all' || q.difficulty === difficulty)
  );

  if (!filteredQuestions.length) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz</h1>
        <p className="text-gray-600">Проверьте свои знания с помощью тестов</p>
      </header>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <select 
          value={topic} 
          onChange={(e) => dispatch(setTopic(e.target.value))}
          className="bg-white p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          aria-label="Select quiz topic"
        >
          <option value="all">Все темы</option>
          <option value="react">React</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
        
        <select 
          value={difficulty} 
          onChange={(e) => dispatch(setDifficulty(e.target.value))}
          className="bg-white p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          aria-label="Select quiz difficulty"
        >
          <option value="all">Все уровни</option>
          <option value="easy">Легкий</option>
          <option value="medium">Средний</option>
          <option value="hard">Сложный</option>
        </select>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-8">
        <QuizCard 
          question={filteredQuestions[currentQuestionIndex]} 
          showAnswer={showAnswer}
          onToggleAnswer={() => dispatch(toggleShowAnswer())}
          onNext={() => dispatch(nextQuestion())}
        />
      </div>

      <Link 
        to="/" 
        className="self-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-colors"
        aria-label="Return to home page"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}

export default Quiz;