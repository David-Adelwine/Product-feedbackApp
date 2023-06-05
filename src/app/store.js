import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../Feature/Post/PostSlice'


export const store = configureStore({
  reducer: {
    posts:postsReducer
  },
});

export default store;