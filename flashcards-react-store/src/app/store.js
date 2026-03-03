import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizSlice";
import cardsReducer from "../features/cards/cardSlice";
// import reducers

export default configureStore({
  reducer: {
    topic: topicsReducer,
    quiz: quizzesReducer,
    card: cardsReducer
    
  },
});
