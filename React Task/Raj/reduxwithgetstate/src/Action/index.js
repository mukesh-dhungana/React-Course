import { Store } from "../Container/Store";
import { AddData } from "./types";

export const Action = ({ data }) => {
  return {
    type: AddData,
    data,
  };
};

export const fetchData = () => {
  return fetch(`http://hn.algolia.com/api/v1/search?query=react`)
    .then(x => x.json())
    .then(data => Store.dispatch(Action({ data: data.hits })));
};
