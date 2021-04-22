import * as React from "react";
import Icons from "../icons";

export default function App(props) {
  const { fileName } = props;
  let splittedFileName = fileName.split(".");
  let fileExtension = splittedFileName[splittedFileName.length - 1];
  switch (fileExtension) {
    case "png":
      return <Icons name="Image" />;

    case "jpg":
      return <Icons name="Image" />;

    case "jpeg":
      return <Icons name="Image" />;

    case "pdf":
      return <Icons name="Pdf" />;

    case "docx":
      return <Icons name="Doc" />;

    default:
      return <Icons name="FileText" />;
  }
}
