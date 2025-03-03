const mongoose = require("mongoose");
const path = require("path");
let collectionName = path.basename(__filename).split(".")[0];

const showSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type: Number,
        required: true
    },
    movie:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie",
        required: true,
    },
    ticketPrice:{
        type: Number,
        required: true
    },
    totalSeats:{
        type: Number,
        required: true
    },
    bookedSeats:{
        type: Array,
        default: []
    },
    theatre:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "theatre",
        required: true,
    }
}, { timestamps: true });

const ShowModel = mongoose.model(collectionName, showSchema);

module.exports = ShowModel;