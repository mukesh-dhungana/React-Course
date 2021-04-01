import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch("http://localhost:5001/users");
  const data = await res.json();
  return data;
});

// export const postUser = createAsyncThunk("users/postUser", async () => {
//   const res = await fetch("http://localhost:5001/users", {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//   })
// })

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loggedUser: {},
    isLogged: true,
  },
  reducers: {
    registerUsers: (state, action) => {
      console.log("Registered", action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    },
    loginUser: (state, action) => {
      console.log("Logged", action.payload);
      return {
        ...state,
        isLogged: true,
        loggedUser: action.payload
      };
    },
    logoutUser: (state) => {
      console.log("Logged Out");
      return {
        ...state,
        isLogged: false,
        loggedUser: {}
      };
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      //   state.status = false;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      console.log("Fulfilled");
      state.users = action.payload;
    },
    [fetchUsers.rejected]: state => {
      // state.status = false;
    },
  },
});

export const { registerUsers, loginUser, logoutUser } = usersSlice.actions;

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
export const selectLoggedUser = state => state.users.loggedUser;
export const checkLogged = state => state.users.isLogged;
// export const selectStatus = state => state.users.isLoading;

export default usersSlice.reducer;
