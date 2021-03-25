import { INCREMENT_COUNT, DECREMENT_COUNT, SET_NAME } from "./actionTypes";
const initialCountState = {
  count: 0,
  name: "Mahesh",
};

export const countReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      console.log("reducer executed");
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
