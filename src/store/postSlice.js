import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;
    },
    addPost: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { setPosts, addPost } = postSlice.actions;
export default postSlice.reducer;