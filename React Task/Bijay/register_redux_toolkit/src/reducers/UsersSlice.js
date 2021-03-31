import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLogged: false
  },
  reducers: {
    registerUsers: (state, action) => {
      console.log("Registered", action.payload);
      return {
        ...state,
        users:[...state.users, action.payload]
      }
    },
    loginUser: (state, action) => {
      console.log("Logged");
    },
    
  },

});

export const { registerUsers, loginUser } = usersSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUsers = state => state.users.users;
export const checkLogged = state => state.users.isLogged;
// export const selectStatus = state => state.users.isLoading;

export default usersSlice.reducer;