import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../Components/Post/PostSlice'
import commentReducer from '../Components/Comments/CommentSlice'


export const store = configureStore({
  reducer: {
    posts:postsReducer,
    Comment:commentReducer
  }
});

export default store;