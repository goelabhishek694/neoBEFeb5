const bookingRouter = require("express").Router();
const authMiddleware = require("../middleware/auth")
const {
    makePayment,
    bookShow,
    getAllBookings
} = require("../controller/booking");

bookingRouter.post("/make-payment", authMiddleware, makePayment);
bookingRouter.post("/book-show", bookShow);
bookingRouter.get("/all", getAllBookings);


module.exports = bookingRouter;
