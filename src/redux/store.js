import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice.js';
import practiceReducer from './practiceSlice.js';
import quizReducer from './quizSlice.js';
import theoryReducer from './theorySlice.js';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    practice: practiceReducer,
    quiz: quizReducer,
    theory: theoryReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('todo', JSON.stringify(state.todo.todos));
  localStorage.setItem('practice', JSON.stringify(state.practice.tasks));
  localStorage.setItem('quiz', JSON.stringify(state.quiz));
  localStorage.setItem('theory', JSON.stringify(state.theory));
});

export default store;