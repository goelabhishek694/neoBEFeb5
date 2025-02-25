import { addMovie } from "../controller/movie";

const router = require("express").Router();
const MovieModel = require("../models/movie");

router.post("/", addMovie);

export default router