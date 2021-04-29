import React, { useState } from "react";
import "./block.css";

function Block({
  title = "Title",
  subTitle = null,
  image,
  handleClick,
  handleDelete,
  isAdmin,
}) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="block"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      onClick={handleClick}
    >
      <img src={image} alt="mall" className="block__image" />
      {showDescription && (
        <div className="block__description">
          <h2>{title}</h2>
          {subTitle && <h2>{subTitle}</h2>}
        </div>
      )}
      {isAdmin && showDescription && (
        <p className="block__deletebutton" onClick={handleDelete}>
          Delete
        </p>
      )}
    </div>
  );
}

export default Block;
