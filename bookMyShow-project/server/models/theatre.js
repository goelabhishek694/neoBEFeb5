const mongoose = require("mongoose");
const path = require("path");
let collectionName = path.basename(__filename).split(".")[0];

const theatreSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    seats:{
        type: Number,
        // required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    isActive:{
        type: Boolean,
        default: false
    },
}, { timestamps: true });

const TheatreModel = mongoose.model(collectionName, theatreSchema);

module.exports = TheatreModel;