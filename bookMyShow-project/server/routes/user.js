const express = require("express");
const {registerUser, loginUser, currentUser, forgetPassword, resetPassword} = require("../controller/user");
const authMiddleware = require("../middleware/auth");

const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login",loginUser);

userRouter.get("/current", authMiddleware, currentUser);

userRouter.patch("/forgetpassword", forgetPassword);

userRouter.patch("/resetpassword", resetPassword);

module.exports = userRouter;