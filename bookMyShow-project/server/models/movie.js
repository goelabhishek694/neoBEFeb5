const mongoose = require("mongoose");
const { type } = require("os");
const path = require("path");
let collectionName = path.basename(__filename).split(".")[0];

const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    genre:{
        type: String,
        required: true,
    },
    language:{
        type: String,
        required: true
    },
    releaseDate:{
        type: Date,
        required: true
    },
    poster:{
        type: String,
        required: true
    }
}, { timestamps: true });

const MovieModel = mongoose.model(collectionName, movieSchema);

module.exports = MovieModel;