import { COUNT } from "../constant";

const initiaLState = {
  countData: [],
};

export default function Count(state = [], action) {
  switch (action.type) {
    case COUNT:
      console.log("reducer", action);
      return [...state, { countData: action.data }];
      break;
    default:
      return state;
  }
}
