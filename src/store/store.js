import { configureStore } from "@reduxjs/toolkit";
import { UserSlice, UserloginSlice } from "./thunks-slices/Registaishen";
import todoslice from "./thunks-slices/todoslice";

export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    users: UserloginSlice.reducer,
    todos: todoslice,
    
  },
});
