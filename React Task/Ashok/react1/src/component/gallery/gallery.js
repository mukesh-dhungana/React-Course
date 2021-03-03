import React from "react";
import "./gallery.css";
import Img from "../../asset/images/gal.jpg";

function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
      <h5>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
        maiores, delectus odio eaque dolorem ullam nobis, voluptas ex enim
        repellendus natus dolorum dolor impedit magni quae. Corporis quaerat
        ullam aliquid!
      </h5>
      <div className="gallery">
        <img src={Img} alt="img" />
        <img src={Img} alt="img" />
        <img src={Img} alt="img" />
        <img src={Img} alt="img" />
        <img src={Img} alt="img" />
        <img src={Img} alt="img" />
      </div>
    </div>
  );
}

export default Gallery;
