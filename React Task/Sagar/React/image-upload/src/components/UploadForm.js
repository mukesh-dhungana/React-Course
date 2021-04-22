import React, { useState } from "react";
import useStorage from "../hook/useStorage";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/jpeg", "image/png"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      console.log("selected", selected);
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (jpeg or png)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <Data file={file} />}
      </div>
    </form>
  );
};

const Data = ({ file }) => {
  const { url, progress } = useStorage(file);
  console.log(url, progress);

  return null;
};

export default UploadForm;
