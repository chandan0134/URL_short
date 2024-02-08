// connect.js
const mongoose = require('mongoose');

async function connectToMongoDB(url) {
    try {
        await mongoose.connect(url);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = {
    connectToMongoDB,
};
