import { SET_LOGGEDIN_USER, IS_ERROR } from "./actionTypes";

export const initialState = {
  user: null,
  isError: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGEDIN_USER:
      return { ...state, user: action.payload };
    case IS_ERROR:
      return { ...state, isError: true };
    default:
      return state;
  }
};
