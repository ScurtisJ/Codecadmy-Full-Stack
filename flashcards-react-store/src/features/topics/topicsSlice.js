import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizSlice';


const topicSlice = createSlice({
    name: 'topic',
    initialState: {
        topics: {}

        },
    reducers: {
        addTopic(state, action) {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: []
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addQuiz, (state, action) => {
            const { id, topicId } = action.payload;
            state.topics[topicId].quizIds.push(id)

        })
    }
})

// Creating the selector to select all the topics in state
export const selectTopics = (state) => state.topic.topics;

export const { addTopic } = topicSlice.actions;

export default topicSlice.reducer;