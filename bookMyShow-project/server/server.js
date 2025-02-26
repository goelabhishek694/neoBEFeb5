require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const userRouter = require("./routes/user");
const MovieRouter = require("./routes/movie");
const TheatreRouter = require("./routes/theatre");
const app = express();
connectDB();

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/movies", MovieRouter);
app.use("/api/theatres", TheatreRouter);


app.listen(process.env.PORT || 8080, () => {
    console.log("server is running on port", process.env.PORT || 8080);
})
