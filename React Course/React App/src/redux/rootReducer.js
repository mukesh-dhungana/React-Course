import { combineReducers } from "redux";
import { countReducer } from "./reducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({ countReducer, userReducer });
