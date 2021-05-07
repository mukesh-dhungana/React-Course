import { createContext, useReducer } from "react";
import {
  studentInfoInitailState,
  studentInfoReducer,
} from "../reducer/studentInfoReducer";

export const StudentInfoContext = createContext(null);

export const StudentInfoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    studentInfoReducer,
    studentInfoInitailState
  );
  return (
    <StudentInfoContext.Provider value={[state, dispatch]}>
      {children}
    </StudentInfoContext.Provider>
  );
};
