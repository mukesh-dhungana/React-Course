import { createContext, useState } from "react";
import { studentDetailData } from "../data"

export const StudentDetailContext = createContext()

export const StudentDetailProvider = props => {
    const [studentDetails, setStudentDetails] = useState(studentDetailData)

    return (
        <StudentDetailContext.Provider value={[studentDetails, setStudentDetails]}>
            {props.children}
        </StudentDetailContext.Provider>
    )
}   