import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase/config";

const MallDetails = () => {
  const { id } = useParams();
  const [mallData, setMallData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let mallData = await db.collection("malls").doc(id);
        let collection = await mallData.get();
        setMallData(collection.data());
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  return (
    <div>
      {mallData && (
        <>
          <h1>{mallData.name}</h1>
          <p>{mallData.description}</p>
        </>
      )}
    </div>
  );
};

export default MallDetails;
