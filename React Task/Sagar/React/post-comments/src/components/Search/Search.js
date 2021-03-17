import React, { useEffect, useState, useMemo } from "react";
import "./Search.css";

const Search = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch("https://randomuser.me/api/?results=1000");
      const data = await response.json();
      const result = data.results;
      setData(result);
    }
    fetchAPI();
  }, []);

  const filterFunction = (e) => {
    setFilter(e.target.value);
    console.log("filter");
  };

  let users = useMemo(() => {
    console.log("memo");
    return data.filter((d) =>
      d.name.first.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter]);

  return (
    <div className="searchContainer">
      <input
        className="searchInput"
        type="text"
        placeholder="Search..."
        onChange={(e) => filterFunction(e)}
      />
      {console.log(data.map((d) => d.name.first))}
      <div className="filterSearch">
        {filter.length >= 3
          ? users.map((d, i) => (
              <div className="filtervalue" key={i}>
                {d.name.first}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Search;
