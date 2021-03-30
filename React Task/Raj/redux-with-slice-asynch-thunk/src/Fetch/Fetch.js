import editData from "../Config/Config";
import {
  createAsyncThunk,
  createSlice,
  configureStore,
} from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("getData/fetchAPIData", async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts").then(data =>
    data.json()
  );
});

export const fetchSlice = createSlice({
  name: "getData",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export default fetchSlice.reducer;
export const { loading } = fetchSlice.actions;

// export const store = configureStore({
//   reducer: fetchSlice,
//   editData,
// });
