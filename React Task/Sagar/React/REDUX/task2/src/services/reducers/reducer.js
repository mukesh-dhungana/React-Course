import { SHOW_DATA } from "../actions/actionTypes";

const initialState = {
  user: [],
};

export default function getReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_DATA:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
}
