import React from "react";
import { fetchData } from "./Fetch";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

export const FetchSlice = () => {
  const selector = useSelector(state => state.fetchSlice); 
  const dispatch = useDispatch();
  const fetchAPI = () => dispatch(fetchData());
  return (
    <div>
      {selector.loading && <h1>Loading...</h1>}
      {selector.data.map(x => (
        <p>{x.title}</p>
      ))}
      <Button color="secondary" variant="contained" onClick={fetchAPI}>
        Fetch
      </Button>
    </div>
  );
};
