import React, { useState, useEffect, useRef } from "react";
import { db, storage } from "./firebase/config";
import { Modal } from "../ui";
import images from "./download.png";
const AddMall = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const myRef = useRef(null);

  const [mall, setMall] = useState({
    name: "",
    address: "",
    description: "",
  });
  const { name, address, description } = mall;

  // Onchange
  const handleChange = (name, e) =>
    setMall({
      ...mall,
      [name]: e.target.value,
    });

  //imagechange
  const imageChange = e => {
    const imgType = ["image/jpeg", "image/png"];
    setError("");
    let selectedFiles = e.target.files[0];
    if (selectedFiles && imgType.includes(selectedFiles.type)) {
      const reader = new FileReader();
      reader.onload = e => {
        myRef.current.src = e.target.result;
      };
      reader.readAsDataURL(selectedFiles);

      setImage(selectedFiles);
      setError("");
    } else {
      setImage(null);
      setError("Please insert only Images(png or jpeg)");
    }
  };
  // Submit
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    // let storageRef = storage.ref("images");
    try {
      await db.collection("malls").doc(name).set(mall);
      setMall({
        name: "",
        address: "",
        description: "",
      });
      setImage("");
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
    setShowModal(false);
  };

  const closeModel = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Modal title="Add Mall" show={showModal} setShow={closeModel}>
        <form onSubmit={e => handleSubmit(e)}>
          <div>
            <label className="mall-name">Name</label>
            <input
              type="text"
              value={name}
              required
              onChange={e => handleChange("name", e)}
            />
          </div>
          <div>
            <label className="mall-address">Address</label>
            <input
              type="text"
              value={address}
              required
              onChange={e => handleChange("address", e)}
            />
          </div>
          <div>
            <figure>
              <img src={images} ref={myRef} alt="download" width="100px"></img>
              <input
                type="file"
                accept={`image/jpeg, image/png`}
                onChange={e => imageChange(e)}
              />
            </figure>
          </div>
          <button disabled={loading}>{loading ? "Loading" : "Save"}</button>
        </form>
      </Modal>
      <div>
        <button onClick={() => setShowModal(true)}>Add Mall</button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AddMall;
