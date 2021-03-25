import { combineReducers } from "redux";
import { GET_ALL_USER, REMOVE_ALL_USER } from "./actiontypes";

const intialState = {
  allUser: [],
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        allUser: action.payload,
      };
    case REMOVE_ALL_USER: {
      return {
        ...state,
        allUser: [],
      };
    }

    default:
      return state;
  }
};

export const reducer = combineReducers({ userReducer });
