import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = e => {
    console.log(e.target.files);
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setError("");
      setFile(selected);
    } else {
      setFile(null);
      setError("Please Select Image file (png/jpeg)");
    }
  };

  return (
    <form>
      <label htmlFor="file-upload">
        <input id="file-upload" type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error"> {error} </div>}
        {file && <div className="file"> {file.name} </div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
