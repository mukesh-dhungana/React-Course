import React, { useState, useEffect } from "react";
import { Store } from "../Container/Store";
import { fetchData } from "../Action/index";
import { Spinner } from "./Loading";

export const Index = () => {
  const [loading, setLoading] = useState(false);
  const [state, setstate] = useState([]);

  const getData = async () => {
    await fetchData();
    setLoading(true);
    setstate(Store.getState().result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading ? "" : <Spinner />}
      {state.map(x => (
        <h3>{x.name.first}</h3>
      ))}
      <button onClick={() => getData()}>Click</button>
      {console.log(state)}
    </div>
  );
};
