const URL = require("../models/url");
const shortid = require('shortid');

async function handleShortUrl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const shortId = shortid.generate();
  const newUrl = new URL({
    shortID: shortId,
    redirectURL: body.url,
  });
  newUrl
    .save()
    .then((item) => {
      res.json({ status: "item saved to database" });
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
}

module.exports = {
  handleShortUrl,
};
