import { createSlice } from "@reduxjs/toolkit";

const collection = {
  data: [],
};
export const mySlice = createSlice({
  name: "slice",
  initialState: collection,
  reducers: {
    signup: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    del: (state, action) => {
      state.data = state.data.filter(x => x.id !== action.payload.id);
    },
    edit: (state, action) => {
      state.data = [
        ...state.data.filter(x => x.id !== action.payload.id),
        action.payload,
      ];
    },
  },
});

export const { signup, del, edit } = mySlice.actions;
export default mySlice.reducer;
