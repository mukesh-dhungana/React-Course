import { combineReducers } from "redux";
import { GET_ALL_USER, LOADING } from "./actiontypes";

const intialState = {
  allUser: [],
  isloaDING: false,
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        allUser: action.payload,
      };
    case LOADING:
      return {
        ...state,
        isloaDING: action.payload,
      };

    default:
      return state;
  }
};

export const reducer = combineReducers({ userReducer });
