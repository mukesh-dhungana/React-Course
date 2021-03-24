import { ADD_TO_CART } from "../Constants";
import { REMOVE_TO_CART } from "../Constants";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = () => {
  console.warn("action");
  return {
    type: REMOVE_TO_CART,
  };
};
