import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    add(state, action) {
      state.list = [...state.list, action.payload];
    },
    del(state, action) {
      state.list = [
        ...state.list.filter((user) => user.id !== action.payload.id),
      ];
    },
    editValue(state, action) {
      state.list = [
        ...state.list.filter((user) => user.id !== action.payload.id),
        action.payload,
      ];
    },
  },
});

export const { add, del, editValue } = dataSlice.actions;
export default dataSlice.reducer;
