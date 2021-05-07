export const checkIsFileImageType = (fileName) => {
  const splittedFile = fileName?.split(".");
  const fileType = splittedFile[splittedFile?.length - 1];
  const imageTypes = ["gif", "jpeg", "png", "jpg"];
  return imageTypes.includes(fileType);
};
