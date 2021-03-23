import React from "react";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../Action/type";

const initialState = {
  data: [],
};
export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        data: [...state.data, action.addData],
      };
      break;
    case DELETE_TODO:
      return {
        ...state,
        data: [...state.data.filter(delData => delData.id !== action.id)],
      };
      break;
    case EDIT_TODO:
      return {
        ...state,
        data: [
          ...state.data.filter(data => data.id !== action.id),
          { value: action.editData, id: action.id },
        ],
      };
      break;
    default:
      return state;
  }
};
