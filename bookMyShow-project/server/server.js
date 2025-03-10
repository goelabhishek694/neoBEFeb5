require('dotenv').config();
const express = require("express");
const rateLimit = require('express-rate-limit');
const connectDB = require("./config/db");
const userRouter = require("./routes/user");
const MovieRouter = require("./routes/movie");
const TheatreRouter = require("./routes/theatre");
const ShowRouter = require("./routes/show");
const BookingRouter = require("./routes/booking.js");
const app = express();
connectDB();

const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes). 100reqs per 900sec
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(express.json());
app.use("/api",apiLimiter)
app.use("/api/users", userRouter);
app.use("/api/movies", MovieRouter);
app.use("/api/theatres", TheatreRouter);
app.use("/api/shows", ShowRouter);
app.use("/book-show/api/bookings", BookingRouter);


app.listen(process.env.PORT || 8080, () => {
    console.log("server is running on port", process.env.PORT || 8080);
})
