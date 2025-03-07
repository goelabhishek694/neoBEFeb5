require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const userRouter = require("./routes/user");
const MovieRouter = require("./routes/movie");
const TheatreRouter = require("./routes/theatre");
const ShowRouter = require("./routes/show");
const BookingRouter = require("./routes/booking.js");
const app = express();
connectDB();

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/movies", MovieRouter);
app.use("/api/theatres", TheatreRouter);
app.use("/api/shows", ShowRouter);
app.use("/book-show/api/bookings", BookingRouter);


app.listen(process.env.PORT || 8080, () => {
    console.log("server is running on port", process.env.PORT || 8080);
})
