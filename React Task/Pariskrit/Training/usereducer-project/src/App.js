import "./App.css";
import AllPosts from "./components/AllPosts";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState, useMemo, useCallback } from "react";

function App() {
  const [value, setValue] = useState("");
  const [datas, setDatas] = useState([]);

  const [toggleTheme, setToggleTheme] = useState(false);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments ");
    const data = await res.json();
    setDatas(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const searchTexts = useMemo(() => {
    let i = 0;
    while (i < 200000000) {
      i++;
    }
    return datas.filter((data) => data.name.slice(0, 3) === value.slice(0, 3));
  }, [value, datas]);

  const handleChange = (e) => {
    if (e.target.value.length >= 3) {
      setValue(e.target.value);
    }
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
        onChange={handleChange}
      />
      {searchTexts.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default App;
