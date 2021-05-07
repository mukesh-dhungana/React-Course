import React,{useState} from "react";
import Uploader from "./dragAndDropUpload";

function Attachment(props) {
  const [attachment, setAttachment] = useState([]);
  const handleFieldChange = (name, acceptedFiles) => {
    setAttachment(acceptedFiles);
  };
  return (
    <div>
      <Uploader
        onChange={handleFieldChange}
        name="attachment"
        value={attachment}
        placeholder="Select"
        width="100%"
        label=""
      />
    </div>
  );
}

export default Attachment;
