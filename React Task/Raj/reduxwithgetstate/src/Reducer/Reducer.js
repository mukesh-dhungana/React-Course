import { AddData } from "../Action/types";

const initialState = {
  result: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case AddData:
      return {
        ...state,
        result: action.data,
      };
      break;
    default:
      return state;
  }
};
