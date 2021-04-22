import "./App.css";
import Books from "./context/components/Books";
import { createContext } from "react";
import { data } from "./data";

const books = createContext(null);
console.log(data.Author);

function App() {
  return (
    <div className="App">
      <books.Provider value={data}>
        <Books author={data.Author} />
      </books.Provider>
    </div>
  );
}

export { books };
export default App;
