import React, { useState, useEffect } from "react";
import { Store } from "../Container/Store";
import { fetchData } from "../Action/index";

export const Index = () => {
  const [state, setstate] = useState([]);

  const getData = async () => {
    await fetchData();
    setstate(Store.getState().result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {state.map(x => (
        <p>{x.title}</p>
      ))}
    </div>
  );
};
