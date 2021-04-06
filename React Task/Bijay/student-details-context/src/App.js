import "./bootstrap.css";
import "./App.css";
import TopHeader from "./components/TopHeader";
import StudentsList from "./components/StudentsList";
import { StudentListProvider } from "./context/StudentListContext";
import StudentDetail from "./components/StudentDetail";

function App() {
  return (
    <StudentListProvider>
      <div className="container header-container">
        <TopHeader />
      </div>
      <div className="container">
        <StudentsList />
        {/* <StudentDetail /> */}
      </div>
    </StudentListProvider>
  );
}

export default App;
