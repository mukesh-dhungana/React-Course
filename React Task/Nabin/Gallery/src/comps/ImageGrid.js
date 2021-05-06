import { motion } from "framer-motion";
import React from "react";
import useFirestore from "../hooks/useFirestore";
import "./ImageGrid.css";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
            whileHover={{ opacity: 1 }}
            layout
          >
            <motion.img
              src={doc.url}
              alt="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
