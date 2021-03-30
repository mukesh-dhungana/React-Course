import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [
      {
        id: 1,
        username: "john_smith",
        fullName: "John Smith",
        email: "john@test.com",
        address: "xyz street",
        role: "admin",
      },
      {
        id: 2,
        username: "mark_doe",
        fullName: "Mark Doe",
        email: "mark@test.com",
        address: "ABC street",
        role: "moderator",
      },
    ],
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
        users: [
          ...state.users.filter(user => user.id !== action.payload.id)
        ]
      }
    },
    editUser: (state, action) => {
      console.log("Edited");
    },
  },
});

export const { addUsers, deleteUsers, editUser } = usersSlice.actions;

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

export default usersSlice.reducer;
