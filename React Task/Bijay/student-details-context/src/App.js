import "./bootstrap.css";
import "./App.css";
import TopHeader from "./components/TopHeader";
import StudentsList from "./components/StudentsList";
import { StudentListProvider } from "./context/StudentListContext";

function App() {
  return (
    <StudentListProvider>
      <div className="container header-container">
        <TopHeader />
      </div>
      <div className="container">
        <StudentsList />
      </div>
    </StudentListProvider>
  );
}

export default App;
