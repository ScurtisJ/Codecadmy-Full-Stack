import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz(state, action) {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = {
                id,
                name,
                topicId,
                cardIds
            }
        }
    }

})

// Creatng the selector to select all the quizzes in state

export const selectQuizzes = (state) => state.quiz.quizzes;

export const { addQuiz } = quizSlice.actions;

export default quizSlice.reducer;
