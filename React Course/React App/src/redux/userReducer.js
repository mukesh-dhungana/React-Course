import { SET_USERS } from "./actionTypes";
const initialCountState = {
  users: [],
};

export const userReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case SET_USERS:
      // console.log("reducer executed");
      return {
        users: [],
      };

    default:
      return state;
  }
};
