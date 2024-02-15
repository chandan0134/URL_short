const express = require("express");
const path = require("path");
const staticRouter=require("./routes/staticRouter")
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const UrlModel = require("./models/url");

const app = express();
const port = 3000;

connectToMongoDB("mongodb://127.0.0.1:27017/shorturl").then(() => {
    console.log("MongoDB connected");
});

app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

app.get("/test", async (req, res) => {
    const allUrls = await UrlModel.find({}); 
    return res.render("home", {
        urls: allUrls,
    });
});

app.use("/url", urlRoute);
app.use("/",staticRouter);




app.listen(port, () => {
    console.log("Server created");
});
