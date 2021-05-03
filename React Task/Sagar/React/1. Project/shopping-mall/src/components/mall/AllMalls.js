import Mall from "./Mall";
import React, { useState } from "react";
import useFirestore from "../../hooks/useFirestore";
import { useHistory, useLocation } from "react-router-dom";
import classes from "../Dashboard/dashboard.module.css";

const AllMalls = () => {
  const [search, setSearch] = useState("");

  const location = useLocation();
  const history = useHistory();

  let { docs } = useFirestore("Shopping Mall");

  console.log("docs", docs);

  const filter = (e) => {
    setSearch(e.target.value);
  };

  if (search) {
    docs = docs.filter((doc) =>
      doc.mallName.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <div className={classes.main}>
      {location.pathname === "/admin/malls" ? (
        <button
          className={classes.addBtn}
          onClick={() => history.push("/admin/newMall")}
        >
          Add New Mall
        </button>
      ) : (
        <div className={classes.search}>
          <input
            className={classes.searchBar}
            type="text"
            placeholder="Search..."
            onChange={filter}
          />
        </div>
      )}
      <div className={classes.mallContainer}>
        <div className={classes.header}>
          <h4 className={classes.heading}>Malls</h4>
        </div>
        {docs?.length !== 0 ? (
          <Mall {...{ docs }} />
        ) : (
          <h3>No Malls Added Yet</h3>
        )}
      </div>
    </div>
  );
};

export default AllMalls;
