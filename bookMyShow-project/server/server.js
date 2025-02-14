require('dotenv').config();
const express = require("express");
const app = express();

const connectDB = require("./config/db");
connectDB();

app.listen(process.env.PORT || 8080, () => {
    console.log("server is running");
})
