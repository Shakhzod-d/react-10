import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authorization = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2OTExNjEyNDEsImV4cCI6MTY5Mzc1MzI0MX0.tjS2xWViYKvzhbED0Tc4MUcBkwS7rDFDbDuvt4DNp7Abbqj0hYsV8SOEggMqVqjdQcZQVkf_kFvb3GUomcpe8A`;

export const getAllPosts = createAsyncThunk(
  "users/getAllPosts",
  async (userId, thunkAPI) => {
    const url = `https://api.tutorchat.uz/api/admin/post/view_all_post?page=0&size=10`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    });
    const data = await response.json();
    // console.log(data);
    return data;
  }
);

export const deletePostById = createAsyncThunk(
  "users/deletePostById",
  async (userId, thunkAPI) => {
    const url = `https://api.tutorchat.uz/api/admin/post/delete_post_by_admin?post_id=${userId}`;

    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();
    // thunkAPI.dispatch(getAllUser());
    // console.log("blockUser", data);
    return data;
  }
);

const initialState = {
  posts: [],
  loading: "idle" | "pending" | "succeeded" | "failed",
  value: 0,
};

export const adminPostSlice = createSlice({
  name: "adminPostSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.posts = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.error;
        }
      });
  },
});

export const { increment } = adminPostSlice.actions;

export default adminPostSlice.reducer;
