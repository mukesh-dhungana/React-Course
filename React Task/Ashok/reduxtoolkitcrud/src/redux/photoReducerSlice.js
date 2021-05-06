import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpCall } from "../services/apiService";

const initialState = {
  photos: [],
  loading: true,
};

export const fetchPhoto = createAsyncThunk(
  "photos/fetchphoto",
  async ({ url, method, signal }, thunkApi) => {
    const response = await httpCall(url, method, signal);
    const data = await response.json();
    return data;
  }
);

const photoReducerSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.photos = [...state.photos, action.payload];
    },
    removeUser: (state, action) => {
      state.photos = state.photos.filter((item) => item.id !== action.payload);
    },
    editUser: (state, action) => {
      state.photos = state.photos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
  extraReducers: {
    [fetchPhoto.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPhoto.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.loading = false;
    },
    [fetchPhoto.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { removeUser, editUser, addUser } = photoReducerSlice.actions;
export const photoReducer = photoReducerSlice.reducer;
