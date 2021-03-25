import "./App.css";
import { AddData } from "./components/AddTodo/AddTodo";
import { Todolist } from "./components/TodoList/Todolist";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddData />
      <Todolist />
    </div>
  );
}

export default App;
