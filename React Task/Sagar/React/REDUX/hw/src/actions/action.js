import { SHOW_DATA } from "./actionTypes";

export const showData = (data) => {
  console.log("action", data);
  return {
    type: SHOW_DATA,
    data: data,
  };
};
