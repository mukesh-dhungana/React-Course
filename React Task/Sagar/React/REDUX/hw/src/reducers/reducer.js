import { SHOW_DATA } from "../actions/actionTypes";

const initialState = {
  data: [],
};

export default function getData(state = initialState, action) {
  switch (action.type) {
    case SHOW_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
