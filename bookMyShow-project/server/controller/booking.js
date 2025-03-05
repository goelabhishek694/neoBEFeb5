const stripe = require("stripe");
require('dotenv').config({ path: "../.env" });
const stripeKey = process.env.STRIPE_KEY;
const BookingModel = require("../models/booking");

const makePayment = async (req, res) => {
    
    try{
        const {token, amount} = req.body;
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const paymentIntent =  await stripe.paymentIntents.create({
            amount:amount,
            currency:"inr",
            customer: customer.id,
            payment_method_types: ['card'],
            receipt_email: token.email,
            description: "token has been assigned to the movie"
        })

        const transactionId =  paymentIntent.id;

        res.send({
            success: true,
            message: "payment Successfull! Ticket(s) Booked",
            data: transactionId
        })
    }catch(err){
        res.send({
            success:false,
            message: err.message
        })
    }
}







module.exports = {
    makePayment,
    bookShow,
    getAllBookings
}