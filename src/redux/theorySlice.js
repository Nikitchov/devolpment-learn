import { createSlice } from '@reduxjs/toolkit';

export const theorySlice = createSlice({
  name: 'theory',
  initialState: {
    topics: [], // Array of theory topics
    currentTopic: null, // Currently selected topic
    quizResult: null, // Result of the quiz
  },
  reducers: {
    setTopics(state, action) {
      state.topics = action.payload;
    },
    setCurrentTopic(state, action) {
      state.currentTopic = action.payload;
    },
    setQuizResult(state, action) {
      state.quizResult = action.payload; // Set the quiz result
    },
  },
});

export const { setTopics, setCurrentTopic, setQuizResult } = theorySlice.actions;

export default theorySlice.reducer;