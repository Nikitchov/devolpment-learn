import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [], // Array of tasks
    input: '', // Current input value
  },
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
    },
    setInput(state, action) {
      state.input = action.payload;
    },
    addTodo(state) {
      if (state.input) {
        state.todos.push({ id: Date.now(), text: state.input, completed: false });
        state.input = '';
      }
    },
    toggleTodo(state, action) {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
});

export const { setTodos, setInput, addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;