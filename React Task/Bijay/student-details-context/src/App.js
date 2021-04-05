import "./bootstrap.css";
import "./App.css";
import TopHeader from "./components/TopHeader";
import StudentsList from "./components/StudentsList";
import StudentDetail from "./components/StudentDetail";
import { StudentListProvider } from "./context/StudentListContext";

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
