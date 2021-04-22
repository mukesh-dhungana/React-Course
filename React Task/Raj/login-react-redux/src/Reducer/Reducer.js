import React from "react";
import { FETCH } from "../Actions/Types";

const initialState = {
  data: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      console.log("reducer", action.data);
      return { ...state, data: action.data };
    default:
      return state;
  }
};
