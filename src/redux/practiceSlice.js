import { createSlice } from '@reduxjs/toolkit';

export const practiceSlice = createSlice({
  name: 'practice',
  initialState: {
    tasks: [],
    currentTask: null,
    code: '',
    result: '',
    difficulty: 'all',
  },
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    setCurrentTask(state, action) {
      state.currentTask = action.payload;
      state.code = '';
      state.result = '';
    },
    setCode(state, action) {
      state.code = action.payload;
    },
    setResult(state, action) {
      state.result = action.payload;
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload;
      state.currentTask = null;
    },
  },
});

export const { setTasks, setCurrentTask, setCode, setResult, setDifficulty } = practiceSlice.actions;

export default practiceSlice.reducer;