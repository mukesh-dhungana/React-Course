import { createContext, useReducer } from "react";

import {
  studentResultInitailState,
  studentResultReducer,
} from "../reducer/studentResultReducer";

export const StudentResult = createContext(null);

export const StudentResultProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    studentResultReducer,
    studentResultInitailState
  );
  return (
    <StudentResult.Provider value={[state, dispatch]}>
      {children}
    </StudentResult.Provider>
  );
};
