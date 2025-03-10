require("dotenv").config({ path: "../.env" });
const stripeKey = process.env.STRIPE_KEY;
const stripe = require("stripe")(stripeKey);
const BookingModel = require("../models/booking");
const ShowModel = require("../models/show");
const emailHelper = require("../utils/emailHelper");
const makePayment = async (req, res) => {
  try {
    const { token, amount } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "inr",
      customer: customer.id,
      payment_method_types: ["card"],
      receipt_email: token.email,
      description: "token has been assigned to the movie",
    });

    const transactionId = paymentIntent.id;

    res.send({
      success: true,
      message: "Payment Successful! Ticket(s) Booked",
      data: transactionId,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

//create a booking after payment
const bookShow = async (req, res) => {;
  try {
    const newBooking = new BookingModel(req.body);
    await newBooking.save();

    const show = await ShowModel.findById(req.body.show).populate("movie");
    const updatedBookSeats = [...show.bookedSeats, ...req.body.seats];
    await ShowModel.findByIdAndUpdate(show, { bookedSeats: updatedBookSeats });
    const bookingDetails = await BookingModel.findById(newBooking["_id"]).populate("user").populate("show").populate({
      path: "show",
      populate: {
        path: "theatre",
        model: "theatre",
      },
    });
    //use lodash's get method to acces nested values
    const emailDetails = {
      name: bookingDetails.user?.email,
      movie: bookingDetails.show?.name,
      theatre:bookingDetails.show?.theatre?.name,
      date:bookingDetails.show?.date,
      time: bookingDetails.show?.time, 
      seats: bookingDetails.seats, 
      amount:bookingDetails.show?.ticketPrice * bookingDetails.show?.bookedSeats.length, 
      transactionId: bookingDetails.transactionId
    }
    await emailHelper("tickets", bookingDetails.user.email,emailDetails);
    res.send({
      success: true,
      message: "Booking done !",
      data: newBooking,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await BookingModel.find({ user: req.body.id })
      .populate("user")
      .populate("show")
      .populate({
        path: "show",
        populate: {
          path: "movie",
          model: "movie",
        },
      })
      .populate({
        path: "show",
        populate: {
          path: "theatre",
          model: "theatre",
        },
      });
    res.send({
      success: true,
      message: "Bookings fetched!",
      data: bookings,
    });
  } catch (err) {
    res.send({
        success: false,
        message: err.message
    })

  }
};

module.exports = {
  makePayment,
  bookShow,
  getAllBookings,
};
