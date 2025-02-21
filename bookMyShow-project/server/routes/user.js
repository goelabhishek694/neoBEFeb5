const express = require("express");
const {registerUser, loginUser, currentUser} = require("../controller/user");
const authMiddleware = require("../middleware/auth");

const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login",loginUser);

userRouter.get("/:id", authMiddleware, currentUser);

module.exports = userRouter;