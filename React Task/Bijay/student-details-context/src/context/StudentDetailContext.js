import { createContext, useState } from "react";

export const StudentDetailContext = createContext()

export const StudentDetailProvider = props => {
    const [studentDetails, setStudentDetails] = useState()

    return (
        <StudentDetailContext.Provider>
            {props.children}
        </StudentDetailContext.Provider>
    )
}   