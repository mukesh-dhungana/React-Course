import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import './UploadForm.css';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (event) => {
    // console.log("Changed")
    let selected = event.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (jpeg or png)");
    }
  };

  return (
    <form className = "form">
      <label className="label">
        <input type="file" className = "input-file" onChange={changeHandler} />
        <span className = "add-file">+</span>
      </label>

      <div className="output">
        { error && <div className="error">{error}</div> }
        { file && <div className="file">{file.name}</div> } 
        { file && <ProgressBar file = {file} setFile = {setFile} /> }
      </div>
    </form>
  );
}

export default UploadForm;
