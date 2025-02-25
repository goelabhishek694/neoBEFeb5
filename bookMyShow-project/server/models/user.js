const mongoose = require("mongoose");
const path = require("path");
let collectionName = path.basename(__filename).split(".")[0];
// let collectionName = path.basename(__filename).slice(0,4);
// let collectionName = path.basename(__filename, path.extname(__filename));

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["admin", "user", "partner"],
        required: true,
        default: "user"
    }
}, { timestamps: true });

const UserModel = mongoose.model(collectionName, userSchema);

module.exports = UserModel;