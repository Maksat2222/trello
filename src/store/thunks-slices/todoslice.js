import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    addcard: (state, action) => {
      state.list.map((item) => {
        if (item.id === action.payload.parrentId) {
          item.card.push(action.payload);
        }

        return item;
      });
    },

    // removeTodo: (state, action) => {
    //   state.list = state.list.filter((todo) => todo.id !== action.payload);
    // },
  },
});

export const { addTodo, addcard } = todoSlice.actions;
export default todoSlice.reducer;
