import React from "react";
import { FETCH } from "./Types";

export const Action = userData => {
  console.log("action", userData);
  return {
    type: FETCH,
    data: userData,
  };
};
