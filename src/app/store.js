import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../Components/Post/PostSlice'
import Addfeedbackreducer from '../Components/Addfeedback/AddfeedbackSlice';
import categoryreducer from '../Components/Category/CategorySlice'


export const store = configureStore({
  reducer: {
    posts:postsReducer,
    addFeedback: Addfeedbackreducer, 
    category: categoryreducer
  }
});

export default store;