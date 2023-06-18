
import { createSlice, nanoid } from "@reduxjs/toolkit";
import data from "../../data";

// const initialState = [
//   {
//     id: '1',
//     title: 'implementing redux toolkit',
//     content: 'redux toolkit implementation experiment'
//   },
//   {
//     id: '2',
//     title: 'implementing redux toolkit',
//     content: 'redux toolkit implementation experiment'
//   }
// ];
const initialState = {
  data:data
};


// const postSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {
//     postAdded: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(  content ) {
//         return {
//           payload: {
//             id: nanoid(),
//            content
//           }
//         };
//       }
//     }
//   }
// });

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.data.productRequests.push(action.payload);
      },
      prepare( content ) {
        return {
          payload: {
            id: nanoid(),
           content
          }
        };
      }
    },
    
  }
});

export const selectAllPosts = state => state.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
