import "./bootstrap.css";
import "./App.css";
import TopHeader from "./components/TopHeader";
import StudentsList from "./components/StudentsList";
import { StudentListProvider } from "./context/StudentListContext";
import StudentDetail from "./components/StudentDetail";
import { StudentDetailProvider } from "./context/StudentDetailContext";
import { Route, Switch } from "react-router";

function App() {
  return (
    <StudentListProvider>
      <StudentDetailProvider>
        <div className="container header-container">
          <TopHeader />
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/" component={StudentsList} />
            <Route exact path="/students" component={StudentDetail} />
            {/* <StudentDetail /> */}
          </Switch>
        </div>
      </StudentDetailProvider>
    </StudentListProvider>
  );
}

export default App;
