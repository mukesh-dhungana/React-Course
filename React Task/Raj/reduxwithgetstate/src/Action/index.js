import { Store } from "../Container/Store";
import { AddData } from "./types";

export const Action = ({ data }) => {
  return {
    type: AddData,

    data,
  };
};

export const fetchData = () => {
  return fetch(`https://randomuser.me/api/`)
    .then(x => x.json())
    .then(data => Store.dispatch(Action({ data: data.results })));
};
