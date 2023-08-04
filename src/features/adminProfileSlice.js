import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const authorization = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2OTExNjEyNDEsImV4cCI6MTY5Mzc1MzI0MX0.tjS2xWViYKvzhbED0Tc4MUcBkwS7rDFDbDuvt4DNp7Abbqj0hYsV8SOEggMqVqjdQcZQVkf_kFvb3GUomcpe8A`;

const mainurl = `https://api.tutorchat.uz`;

export const getAllUser = createAsyncThunk(
  "users/fetchAllUsers",
  async (userId, thunkAPI) => {
    const url = `https://api.tutorchat.uz/api/admin/admin/view_all_user`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    });
    const data = await response.json();
    return data;
  }
);

export const blockUser = createAsyncThunk(
  "users/blockUser",
  async (userId, thunkAPI) => {
    const url = `https://api.tutorchat.uz/api/admin/admin/block_user/${userId}`;

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
      body: JSON.stringify(userId),
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();
    thunkAPI.dispatch(getAllUser());
    // console.log("blockUser", data);
    return data;
  }
);

const initialState = {
  view_all_user: [],
  loading: "idle" | "pending" | "succeeded" | "failed",
  value: 0,
};

export const adminProfileSlice = createSlice({
  name: "adminProfileSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.view_all_user = action.payload;
      })
      .addCase(getAllUser.rejected, (state, action) => {
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

export const { increment } = adminProfileSlice.actions;

export default adminProfileSlice.reducer;
