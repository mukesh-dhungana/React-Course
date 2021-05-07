import React, { createContext, useReducer } from "react";
import { firebaseAuth } from "../reducers/authReducer";

export const Auth = createContext();

const initialState = {
  user: {},
};
export const AuthProvider = props => {
  const [state, dispatch] = useReducer(firebaseAuth, initialState);
  const value = { state, dispatch };

  return <Auth.Provider value={value}>{props.children}</Auth.Provider>; // we place value(state, dispatch) in Auth and provide now if use useContext(Auth) can able to access state and dispatch
};
