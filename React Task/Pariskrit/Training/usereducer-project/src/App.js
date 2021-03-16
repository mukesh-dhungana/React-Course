import "./App.css";
import AllPosts from "./components/AllPosts";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState, useMemo, useCallback } from "react";

function App() {
  const [value, setValue] = useState("");
  const [datas, setDatas] = useState([]);
  const [lists, setLists] = useState([]);
  const [toggleTheme, setToggleTheme] = useState(false);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments ");
    const data = await res.json();
    setDatas(data);
  };
  useEffect(() => {
    getData();
  }, [toggleTheme]);

  const searchTexts = useMemo(
    () => datas.filter((data) => data.name.slice(0, 3) === value.slice(0, 3)),
    [datas, value]
  );

  const handleChange = (e) => {
    if (value.length >= 3) {
      setLists([...searchTexts]);
    }
    setValue(e.target.value);
  };

  const changeTheme = useCallback(() => setToggleTheme(!toggleTheme), [
    toggleTheme,
  ]);

  return (
    <div className={`App ${toggleTheme && "dark"}`}>
      <AllPosts handleThemeChange={changeTheme} />
      <TextField
        id="standard-basic"
        label="Standard"
        placeholder="Enter Texts..."
        value={value}
        onChange={handleChange}
      />
      {lists.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default App;
