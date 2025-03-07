const stripe = require("stripe");
require("dotenv").config({ path: "../.env" });
const stripeKey = process.env.STRIPE_KEY;
const BookingModel = require("../models/booking");
const ShowModel = require("../models/show");

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
      message: "payment Successfull! Ticket(s) Booked",
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
    res.send({
      success: true,
      message: "new booking done",
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
          model: "movies",
        },
      })
      .populate({
        path: "show",
        populate: {
          path: "theatre",
          model: "theatres",
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
