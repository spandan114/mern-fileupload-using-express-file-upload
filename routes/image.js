const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const image = mongoose.model("image")


router.get("/files", (req, res) => {
  req.res("hello")
});



module.exports = router ;