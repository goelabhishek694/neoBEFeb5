const express = require("express");
const UserModel = require("../models/user");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    try{
        const {email} = req.body;
        // Check if user exists by using the email and findOne method 
        // write code
        const user = await UserModel.findOne({email});
        // If user exists, return a response to the user that User Already Exists
        // write code
        if(user){
            return res.status(400).json({
                message: "User already exists"
            })
        }
        // If user does not exist, create a new user and save it to the database
        // write code
        const newUser = new UserModel(req.body);
        await newUser.save();
        // Send a response to the user that Registration Successful, Please login
        // write code
        return res.status(201).json({
            message: "User registered succesfully"
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: err.message
        })
    }
})

userRouter.post("/login", async (req, res) => {
    try{
        const {email,password: passwordFromClient} = req.body;
        const user = await UserModel.findOne({email});
        
        if(!user){
            return res.status(400).json({
                message: "User does not exists. PLease register."
            });
        }
        if(passwordFromClient !== user.password) {
            return res.status(400).json({
                message: "invalid credentials"
            });
        }
        return res.status(200).json({
            message: "User logged in succesfully"
        })
    } catch(err){
        console.log(err);
        return res.status(500).json({
            message: err.message
        })
    }
})

module.exports = userRouter;