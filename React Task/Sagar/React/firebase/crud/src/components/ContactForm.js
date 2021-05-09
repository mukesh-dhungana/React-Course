import React, { useState, useEffect } from "react";

const ContactForm = ({ addOrEdit, currentId, contactObjects }) => {
  const initialValues = {
    fullName: "",
    phone: "",
    email: "",
    address: "",
  };

  const [data, setData] = useState(initialValues);
  const { fullName, phone, email, address } = data;

  useEffect(() => {
    if (currentId === "") {
      setData(initialValues);
    } else {
      setData({ ...contactObjects[currentId] });
    }
  }, [currentId, contactObjects]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addOrEdit(data);
    setData(initialValues);
  };

  const handleChange = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <form autoComplete="off" onSubmit={onSubmitHandler}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          name="fullName"
          value={fullName}
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input
            type="number"
            className="form-control"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="form-group ">
        <textarea
          type="text"
          className="form-control"
          placeholder="Address"
          name="address"
          value={address}
          onChange={onChangeHandler}
        />
        <input type="file" onChange={handleChange} />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={currentId ? "Update" : "Save"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
