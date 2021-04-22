import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch("http://localhost:5000/users");
//   setTimeout(() => {
//     const data = res.json();
//     return data;
//   }, 300);
    const data = await res.json();
    return data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
  },
  reducers: {
    addUsers: (state, action) => {
      console.log("added", action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    },
    deleteUsers: (state, action) => {
      console.log("Deleted");
      return {
        ...state,
        users: [...state.users.filter(user => user.id !== action.payload.id)],
      };
    },
    editUsers: (state, action) => {
      console.log("Edited");
      return {
        ...state,
        users: [
          ...state.users.map(user =>
            user.id === action.payload.id ? action.payload : user
          ),
        ],
      };
    },
    toggleLoading: (state, action) => {
        state.isLoading = !state.isLoading
    }
  },

  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
    //   state.status = false;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      // state.users = action.payload;
      // setTimeout(() => {
      //   state.status = true;
      // }, 3000);
      //   state.status = true;
      state.users = action.payload;
    },
    [fetchUsers.rejected]: state => {
      state.status = false;
    },
  },
});

export const { addUsers, deleteUsers, editUsers, toggleLoading } = usersSlice.actions;

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
export const selectStatus = state => state.users.isLoading;

export default usersSlice.reducer;
