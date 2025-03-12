require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
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
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

app.use(
  helmet({
	xFrameOptions: { action: "deny" },
  })
);
app.disable('x-powered-by');
app.use(express.json());
app.use(function (req, res, next) {
	res.header("X-powered-by", "Blood, sweat, and tears")
	next()
  })
app.use(mongoSanitize());
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: ["'self'", "example.com"], // Allow scripts from 'self' and example.com
//       styleSrc: ["'self'", "'unsafe-inline'"], // Allow inline styles (unsafe)
//       imgSrc: ["'self'", "data:", "example.com"], // Allow images from 'self', data URLs, and example.com
//       connectSrc: ["'self'", "api.example.com"], // Allow connections to 'self' and api.example.com
//       fontSrc: ["'self'", "fonts.gstatic.com"], // Allow fonts from 'self' and fonts.gstatic.com
//       objectSrc: ["'none'"], // Disallow object, embed, and applet elements
//       upgradeInsecureRequests: [], // Upgrade insecure requests to HTTPS
//     },
//   })
// );
app.use("/api", apiLimiter);

app.use("/api/users", userRouter);
app.use("/api/movies", MovieRouter);
app.use("/api/theatres", TheatreRouter);
app.use("/api/shows", ShowRouter);
app.use("/book-show/api/bookings", BookingRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log("server is running on port", process.env.PORT || 8080);
});
