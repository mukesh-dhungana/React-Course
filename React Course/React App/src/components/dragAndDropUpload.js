import { Paper } from "@material-ui/core";
import RootRef from "@material-ui/core/RootRef";
import Icons from "./icons";
import GetFileTypeIcon from "./icons/getFileTypeIcon";
import { validUploadDocExtension } from "../constants/validExtensions";
import { checkIsFileImageType } from "../helpers/checkIsFileImageType";
import { getSelectedUploadFile } from "../helpers/getSelectedUploadFile";
import isEmpty from "../helpers/isEmpty";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdClose } from "react-icons/md";


const App = (props) => {
  const { value, onChange, name } = props;
  const [docs, setDocs] = useState(value);
  const [notValidFile, setNotValidFile] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    // const results = value?.filter(
    //   ({ value1: id1 }) =>
    //     !acceptedFiles?.some(({ value2: id2 }) => id2 === id1)
    // );

    onChange(name, acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    getFilesFromEvent: (event) => myCustomFileGetter(event),
  });
  async function myCustomFileGetter(event) {
    const fileList = event?.dataTransfer
      ? event?.dataTransfer?.files
      : event?.target?.files;

    let { inValidFileExists, mergedFiles } = getSelectedUploadFile(
      fileList,
      value
    );
    setNotValidFile(inValidFileExists);
    return mergedFiles;
  }

  const { ref, ...rootProps } = getRootProps();
  const files = value.map((file, i) => {
    let isImageFile = file?.name && checkIsFileImageType(file?.name);
    return (
      <li key={i} className="file-li flex text-md">
        <a
          href={
            isEmpty(file?.FileLocation)
              ? window.URL.createObjectURL(file)
              : file?.FileLocation
          }
          target={isImageFile ? "_blank" : ""}
          download={isImageFile ? false : true}
          className="flex link-color"
          rel="noreferrer"
        >
          <GetFileTypeIcon fileName={file.name} />
          <span className="ml-xsm"> {file.name}</span>
        </a>
        <MdClose
          onClick={() => removeFile(file)}
          className="ml-sm cursor-pointer"
        />
      </li>
    );
  });
  const removeFile = (selected) => {
    let currentFiles = value.filter((x) => x.name !== selected.name);
    onChange(name, currentFiles);
  };
  return (
    <div className="attachment">
      {/* <div className="attachment__title flex">
        <h3>Attachment</h3>
        <GrAttachment className="ml-sm" />
      </div> */}
      <div className="attachment__upload mt-sm">
        <RootRef rootRef={ref}>
          <Paper {...rootProps}>
            <input {...getInputProps()} />
            <p>
              Drag and drop or <span className="text-blue">Browse a file</span>
            </p>
          </Paper>
        </RootRef>
      </div>
      <div>
        <ul>{files}</ul>
      </div>
      {notValidFile && (
        <div className="flex error-color text-md mt-xsm items-start">
          <Icons name="Info" />
          <span className="error__message">
            Invalid file type(valid file types are{" "}
            {validUploadDocExtension.join(", ")})!
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
