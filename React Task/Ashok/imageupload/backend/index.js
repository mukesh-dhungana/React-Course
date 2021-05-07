const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storeConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  },
});

const uploader = multer({
  storage: storeConfig,
});

app.use(express.static("uploads"));
app.use("/image", express.static(path.join(__dirname, "uploads")));

app.post("/imageupload", uploader.single("img"), (req, res) => {
  console.log("reached back");
  return res.json({ msg: "uploaded" });
});

app.listen(8000);
