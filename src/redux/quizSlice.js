import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
name: 'quiz',
initialState: {
questions: [], // Array of questions
currentQuestionIndex: 0, // Index of the current question
answers: {}, // User answers
score: 0, // Current score
topic: 'all', // Selected topic (e.g., 'all', 'react', 'html', 'css')
difficulty: 'all', // Selected difficulty (e.g., 'all', 'easy', 'medium', 'hard')
showAnswer: false, // Show/hide answer
},
reducers: {
setQuestions(state, action) {
state.questions = action.payload;
},
setCurrentQuestionIndex(state, action) {
state.currentQuestionIndex = action.payload;
},
submitAnswer(state, action) {
const { questionId, answer } = action.payload;
state.answers[questionId] = answer;
if (state.questions.find(q => q.id === questionId)?.correctAnswer === answer) {
state.score += 1;
}
},
nextQuestion(state) {
if (state.currentQuestionIndex < state.questions.length - 1) {
state.currentQuestionIndex += 1;
}
},
resetQuiz(state) {
state.currentQuestionIndex = 0;
state.answers = {};
state.score = 0;
state.topic = 'all';
state.difficulty = 'all';
state.showAnswer = false;
},
setTopic(state, action) {
state.topic = action.payload;
state.currentQuestionIndex = 0; // Reset to first question when topic changes
},
setDifficulty(state, action) {
state.difficulty = action.payload;
state.currentQuestionIndex = 0; // Reset to first question when difficulty changes
},
toggleShowAnswer(state) {
state.showAnswer = !state.showAnswer;
},
},
});

export const { setQuestions, setCurrentQuestionIndex, submitAnswer, nextQuestion, resetQuiz, setTopic, setDifficulty, toggleShowAnswer } = quizSlice.actions;

export default quizSlice.reducer;