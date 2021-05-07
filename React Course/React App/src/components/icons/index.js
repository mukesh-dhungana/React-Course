import React from "react";
import {
  AiFillAppstore,
  AiFillStar,
  AiOutlineDollar,
  AiOutlineSearch,
  AiOutlineStar,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import {
  BsArrowsAngleContract,
  BsArrowsAngleExpand,
  BsChevronLeft,
  BsChevronRight,
  BsThreeDots,
} from "react-icons/bs";
import {
  FaCheckCircle,
  FaFileInvoice,
  FaMinusCircle,
  FaRegCopy,
  FaRegFileImage,
  FaRegFilePdf,
  FaRegFileWord,
  FaUmbrellaBeach,
  FaUserEdit,
  FaUserFriends,
} from "react-icons/fa";
import { FcOvertime } from "react-icons/fc";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";
import { GoCheck, GoChevronDown, GoComment } from "react-icons/go";
import { IoIosPlayCircle, IoMdStopwatch } from "react-icons/io";
import {
  MdAccessTime,
  MdAdd,
  MdArrowForward,
  MdCancel,
  MdCheck,
  MdCheckCircle,
  MdClose,
  MdDelete,
  MdEdit,
  MdInfo,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
  MdPause,
  MdPauseCircleFilled,
  MdPlayArrow,
} from "react-icons/md";

function getIconComponent(name) {
  switch (name) {
    case "ArrowExpand":
      return BsArrowsAngleExpand;
    case "ArrowCollapse":
      return BsArrowsAngleContract;
    case "AngleRight":
      return BsChevronRight;
    case "AngleLeft":
      return BsChevronLeft;
    case "ArrowForward":
      return MdArrowForward;
    case "Add":
      return MdAdd;
    case "List":
      return AiOutlineUnorderedList;
    case "Edit":
      return MdEdit;
    case "File":
      return FaFileInvoice;
    case "Delete":
      return MdDelete;
    case "ChevronDown":
      return GoChevronDown;
    case "Grab":
      return AiFillAppstore;
    case "FavBorder":
      return AiOutlineStar;
    case "Fav":
      return AiFillStar;
    case "Search":
      return AiOutlineSearch;
    case "Check":
      return MdCheck;
    case "Close":
      return MdClose;
    case "StopWatch":
      return IoMdStopwatch;
    case "BoldCheck":
      return GoCheck;
    case "Play":
      return MdPlayArrow;
    case "Pause":
      return MdPause;
    case "Copy":
      return FaRegCopy;
    //#region Circle
    case "CircleCheck":
      return MdCheckCircle;
    case "CirclePlay":
      return IoIosPlayCircle;
    case "CirclePause":
      return MdPauseCircleFilled;
    case "CircleMinus":
      return FaMinusCircle;
    case "ArrowUpRight":
      return FiArrowUpRight;
    case "ArrowUp":
      return MdKeyboardArrowUp;
    case "ArrowDown":
      return MdKeyboardArrowDown;
    case "ArrowLeft":
      return MdKeyboardArrowLeft;
    case "ArrowRight":
      return MdKeyboardArrowRight;
    case "Users":
      return FaUserFriends;
    case "UserEdit":
      return FaUserEdit;
    case "Ellipse":
      return BsThreeDots;
    case "Leave":
      return FaUmbrellaBeach;
    case "Time":
      return MdAccessTime;
    case "Overtime":
      return FcOvertime;
    case "Allowance":
      return AiOutlineDollar;
    case "Comment":
      return GoComment;
    case "Pdf":
      return FaRegFilePdf;
    case "Info":
      return MdInfo;
    case "Image":
      return FaRegFileImage;
    case "Doc":
      return FaRegFileWord;
    case "FileText":
      return FiFileText;
    case "Approve":
      return FaCheckCircle;
    case "Reject":
      return MdCancel;
    case "Cancel":
      return FaMinusCircle;
    //#endregion
    default:
      return null;
  }
}

function index(props) {
  const { name, size, color, className, styles, justSVG, ...rest } = props;

  let ReactIcon = getIconComponent(name);

  const finalStyles = {
    display: "flex",
    fontSize: size,
    color: color,
    ...styles,
  };

  if (justSVG) {
    return <ReactIcon />;
  }
  return (
    <span style={finalStyles} className={className} {...rest}>
      <ReactIcon />
    </span>
  );
}

index.defaultProps = {
  name: "",
  size: 20,
  color: "",
  className: "",
  styles: "",
};

export default index;
