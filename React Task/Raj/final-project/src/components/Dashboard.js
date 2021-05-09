import React, { useState, useEffect } from "react";
import { db } from "./firebase/config";
import MallList from "./MallList";

import AddMall from "./AddMall";

const Dashboard = () => {
  const [mallData, setMallData] = useState([]);

  // UseEffect
  useEffect(() => {
    db.collection("malls").onSnapshot(snap => {
      let documents = [];
      snap.forEach(datas => {
        documents.push({ ...datas.data(), id: datas.id });
      });
      setMallData(documents);
    });
  }, []);

  return (
    <div>
      <AddMall />
      <h1>Mall List</h1>
      <MallList mallData={mallData} />
    </div>
  );
};

export default Dashboard;
