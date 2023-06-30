import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const initialState={
  data:data
}

const CategorySlice=createSlice({
  name:'Category',
  initialState,
  reducers: {}
})

export const selectAllCategory =(state)=>state.Category;
export default CategorySlice.reducer