import "./App.css";
import AllPosts from "./components/AllPosts";
import { useState, useCallback } from "react";

function App() {
  const [toggleTheme, setToggleTheme] = useState(false);

  const changeTheme = useCallback(() => setToggleTheme(!toggleTheme), [
    toggleTheme,
  ]);

  return (
    <div className={`App ${toggleTheme && "dark"}`}>
      <AllPosts handleThemeChange={changeTheme} />
    </div>
  );
}

export default App;
