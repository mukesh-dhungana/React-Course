import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, name: "Run" },
    { id: 2, name: "Walk" },
    { id: 3, name: "Wash Dish" },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      prepare: (value) => ({
        payload: { id: Date.now(), name: value },
      }),
    },
    deleteTodo: (state, action) => {
      // const {todos} = state;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
