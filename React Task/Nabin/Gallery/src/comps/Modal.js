import { motion } from "framer-motion";
import React from "react";
import "./Modal.css";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (event) => {
    if (event.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        alt="enlarged image"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
