import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Thunk
export const getData = createAsyncThunk("data/getData", (endpoint) => {
  return fetch(endpoint)
    .then((response) => response.json())
    .then((user) => user.results);
});

//CreateSlice

const initialState = {
  entities: [],
  user: {
    id: 12,
    name: "Xyz",
    email: "xyz@gmail.com",
    address: "xyz xyz",
    phone: "2121212121221",
  },
  loading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    edit(state, action) {
      state.user = action.payload;
    },
    load(state) {
      state.loading = true;
    },
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.entities = action.payload;
      state.loading = false;
    },
  },
});

export const { edit, load } = dataSlice.actions;

export default dataSlice.reducer;
