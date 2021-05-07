import React, { useEffect, useState } from "react";
import "./style.css";

function AddImageForm({ history }) {
  const [image, setImage] = useState({});
  const [images, setImages] = useState([
    ...JSON.parse(localStorage.getItem("images")),
  ]);

  const onChange = (e) => {
    setImage(e?.target?.files[0]);
  };

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify([...images]));
  }, [images]);

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", image);
    fetch("http://localhost:8000/imageupload", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setImages((prev) => [...prev, image.name]);
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("object"));
  };

  return (
    <div className="view-image-container">
      <button onClick={() => history.push("/images")}>View Images</button>
      <form onSubmit={handleUpload}>
        <div className="image-field">
          <label htmlFor="image"></label>
          <input type="file" name="image" id="image" onChange={onChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default AddImageForm;
