import { SHOW_DATA } from "./actionTypes";

export const showData = (data) => {
  return {
    type: SHOW_DATA,
    data: data,
  };
};
