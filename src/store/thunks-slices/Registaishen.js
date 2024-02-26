import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosos } from "../../api/api";
import { loginuser, registeruser } from "./registorthunks";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(registeruser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registeruser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registeruser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const UserloginSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginuser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginuser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
