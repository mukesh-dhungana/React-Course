import { INCREMENT_COUNT, DECREMENT_COUNT, SET_NAME } from "./actionTypes";
export const incrementCountActionCreater = () => {
  //console.log("action executed");
  return { type: "dsdsd" };
};
export const decrementCountActionCreater = () => {
  return { type: DECREMENT_COUNT };
};

export const changeName = (payload) => {
  return { type: SET_NAME, payload };
};
