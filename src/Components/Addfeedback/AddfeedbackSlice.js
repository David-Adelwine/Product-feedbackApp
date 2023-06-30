import { createSlice, nanoid } from "@reduxjs/toolkit";
import data from "../../data";

const initialState={
Feedback: data
}

const AddfeedbackSlice=createSlice({
  name:'feedback',
  initialState,
  reducers:{
    FeedbackAdded:{
      reducer(state,action){
      state.push(action.payload)
    },
    prepare(title, content, category){
      return{
        payload:{
          id:nanoid(),
          title,
          content,
          category
        }
      }
    }
  }
  }

})

export const selectAllFeedbacks = state => state.posts;
export  const {FeedbackAdded} = AddfeedbackSlice.actions
export default AddfeedbackSlice.reducer