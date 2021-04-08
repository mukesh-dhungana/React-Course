import { createContext, useReducer } from "react"
import { studentList } from "../data"
import { studentListReducer } from "../reducers/studentlistreducer"

export const StudentListContext = createContext(null)

export const StudentListProvider = props => {
    const [state, dispatch] = useReducer(studentListReducer, studentList)

    return (
        <StudentListContext.Provider value={[state, dispatch]}>
            {props.children}
        </StudentListContext.Provider>
    )
}