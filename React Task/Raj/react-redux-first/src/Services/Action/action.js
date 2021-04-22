import { COUNT } from "../constant";

export const Count = data => {
  console.log("action", data);
  return { type: COUNT, data };
};
