import { createContext, useState } from "react"
import { studentList } from "../data"

export const StudentListContext = createContext()

export const StudentListProvider = props => {
    const [students, setStudents] = useState(studentList)

    return (
        <StudentListContext.Provider value={[students, setStudents]}>
            {props.children}
        </StudentListContext.Provider>
    )
}