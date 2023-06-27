
import { createSlice, nanoid } from "@reduxjs/toolkit";
import data from "../../data";


const initialState = {
  data:data
};


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
     commentAdded: {
      reducer(state, action) {
        const { postId, comment } = action.payload;
        const productRequest = state.data.productRequests.find(
          (request) => request.id === postId
        );
        if (productRequest) {
          if (!productRequest.comments) {
            productRequest.comments = [];
          }
          productRequest.comments.push(comment);
        }
      },
      prepare(postId, content) {
        return {
          payload: {
            postId,
            comment: {
              id: nanoid(),
              content,
            },
          },
        };
      },
    },
    
  }
});

export const selectAllPosts = state => state.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;




