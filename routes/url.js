const express = require("express");
const { handleShortUrl } = require("../controllers/url"); // Import the route handler

const router = express.Router();

router.post("/", handleShortUrl); // Define the route handler for the POST request

module.exports = router;
