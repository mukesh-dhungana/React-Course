import React from "react";
import Student from "./component/student/Student";
import { StudentInfoProvider } from "./context/studentInfo.conext";
import { StudentResultProvider } from "./context/studentResult.context";
import "./App.css";

function App() {
  return (
    <div>
      <StudentInfoProvider>
        <StudentResultProvider>
          <Student />
        </StudentResultProvider>
      </StudentInfoProvider>
    </div>
  );
}

export default App;
