import React from "react";
import useFirestore from "../hook/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  console.log("docs", docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div key={doc.id}>
            <img src={doc.url} alt="" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
