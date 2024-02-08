// index.js
const express = require('express');
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");

const app = express();
const port = 8001;

app.use(express.json());

connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(() => {
    app.use("/url", urlRoute);
    app.listen(port, () => console.log(`Server started on port:${port}`));
});
