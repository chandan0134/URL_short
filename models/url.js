// models/url.js
const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortID: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
      
    },
  });

const urlModel = mongoose.model("url", urlSchema);
module.exports = urlModel;
