import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './UsersSlice';

export default configureStore({
  reducer: {
    users: usersSlice,
  },
});
