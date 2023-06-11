import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../Components/Post/PostSlice'


export const store = configureStore({
  reducer: {
    posts:postsReducer,
  }
});

export default store;