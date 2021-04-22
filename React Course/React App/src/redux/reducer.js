import { INCREMENT_COUNT, DECREMENT_COUNT, SET_NAME } from "./actionTypes";
import { incrementAction, getUserAction } from "./actions";
import { createReducer, createSlice } from "@reduxjs/toolkit";
const initialCountState = {
  count: 0,
  name: "Mahesh",
  userCount: 0,
};

// export const countReducer = (state = initialCountState, action) => {
//   switch (action.type) {
//     case incrementAction.toString():
//       //  console.log(incrementAction.toString());
//       return {
//         ...state,
//         count: state.count + action.payload.val,
//       };
//     case DECREMENT_COUNT:
//       return {
//         ...state,
//         count: state.count - action.payload,
//       };
//     case SET_NAME:
//       return {
//         ...state,
//         name: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const countReducer = createReducer(initialCountState, {
//   INCREMENT_COUNT: (state, action) => {
//     state.count = state.count + action.payload;
//   },
// });

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isloading: false,
  },
  reducers: {
    loading: (state, action) => {
      state.isloading = true;
    },
    getUsers: (state, action) => {
      // state.users.push({ id: 0, name: "dsd" });
      state.users = action.payload;
      console.log("user updated");
      state.isloading = false;
    },
  },
  extraReducers: {
    // [getUserAction.pending]: (state, action) => {
    //   console.log("state is pending");
    //   state.isloading = true;
    // },
    // [getUserAction.fulfilled]: (state, action) => {
    //   console.log("state is fulfilled");
    //   state.users = action.payload;
    //   state.isloading = false;
    // },
    // [getUserAction.rejected]: (state, action) => {
    //   console.log("state is rejected");
    // },
    // [countSlice.actions.increment]:(state, action) => {

    // }
  },
});

const countSlice = createSlice({
  name: "counter",
  initialState: initialCountState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
  },
  // extraReducers: {
  //   [userSlice.actions.getUsers]: (state, action) => {
  //     state.userCount++;
  //   },
  // },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
export const { getUsers } = userSlice.actions;
export const { reducer } = userSlice;
