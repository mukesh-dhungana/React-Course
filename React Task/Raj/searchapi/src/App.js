import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [api, setApi] = useState([]);
  const [result, setResult] = useState("");
  const [searchResult, setSearch] = useState([]);

  const fetchData = () =>
    fetch(`http://hn.algolia.com/api/v1/search?query=node`)
      .then(data => data.json())
      .then(result => setApi(result.hits));

  useEffect(() => {
    fetchData();
  }, []);

  const searchData = e => {
    setResult(e.target.value);
    const data = api.filter((x, i) => {
      return x.title.match(e.target.value);
    });
    setSearch(data);
  };
  const mainData = result.length >= 3 ? searchResult : api;

  return (
    <div className="App">
      <form>
        <input type="text" onChange={searchData} />
      </form>
      {mainData.map((result, i) => (
        <h3 key={i}>{result.title}</h3>
      ))}
    </div>
  );
}

export default App;
