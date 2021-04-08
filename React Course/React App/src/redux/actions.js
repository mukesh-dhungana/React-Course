import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { INCREMENT_COUNT, DECREMENT_COUNT, SET_NAME } from "./actionTypes";
import { increment, getUsers } from "./reducer";
import delayAdapterEnhancer from "axios-delay";
import { AxiosAdapter } from "axios";
export const incrementCountActionCreater = () => {
  //console.log("action executed");
  return { type: INCREMENT_COUNT };
};
export const decrementCountActionCreater = () => {
  return { type: DECREMENT_COUNT };
};

export const changeName = (payload) => {
  return { type: SET_NAME, payload };
};

export const incrementAction = createAction(INCREMENT_COUNT);

// const api = axios.create({
//   adapter: AxiosAdapter(axios.defaults.adapter),
// });
// export const getUserAction = createAsyncThunk(
//   "user/getUser",
//   async (users, { dispatch, getState }) => {
//     let res = await api.get("https://jsonplaceholder.typicode.com/users/", {
//       delay: 5000, // delay 1 second
//     });
//     let data = await res.json();
//     throw new Error("error");
//     return data;
//   }
// );

// First, create the thunk
export const getUserAction = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/")
    return await response.data.json()
  }
)


// export const asyncActioncreater = () => async (dispatch, getState) => {
//   dispatch({ type: "user/loading" });

//   const state = getState();
//   // setTimeout(async () => {
//   let res = await api.get("https://jsonplaceholder.typicode.com/users/", {
//     delay: 5000, // delay 1 second
//   });
//   let data = await res;
//   dispatch(getUsers(data));
//   // }, 2000);
// };
