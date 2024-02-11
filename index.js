const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url"); // Corrected import statement

const app = express();
const port = 3000;

connectToMongoDB("mongodb://127.0.0.1:27017/shorturl").then(() => {
    console.log("connected to db");
});

app.use(express.json());
app.use("/url", urlRoute); // Corrected usage of the router

app.listen(port, () => {
    console.log("Server created");
});
