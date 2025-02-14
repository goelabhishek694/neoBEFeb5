const express = require("express");
const UserModel = require("../models/user");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    try{
        // Check if user exists by using the email and findOne method 
        // write code
        // If user exists, return a response to the user that User Already Exists
        // write code
        // If user does not exist, create a new user and save it to the database
        // write code
        // Send a response to the user that Registration Successful, Please login
        // write code
    }catch(err){
        console.log(err);
    }
})

module.exports = userRouter;