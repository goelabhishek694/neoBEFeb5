require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const userRouter = require("./routes/user");
const app = express();
connectDB();

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(process.env.PORT || 8080, () => {
    console.log("server is running on port", process.env.PORT || 8080);
})
