import { createContext, useReducer } from "react";
import { studentDetailData } from "../data"
import { studentDetailReducer } from "../reducers/studentdetailreducer";

export const StudentDetailContext = createContext()

export const StudentDetailProvider = props => {
    const [state, dispatch] = useReducer(studentDetailReducer, studentDetailData)

    return (
        <StudentDetailContext.Provider value={[state, dispatch]}>
            {props.children}
        </StudentDetailContext.Provider>
    )
}   