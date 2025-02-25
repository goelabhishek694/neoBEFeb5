const movieRouter = require("express").Router();
const {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
} = require("../controller/movie");

movieRouter.post("/", addMovie);
movieRouter.get("/", getAllMovies);
movieRouter.put("/", updateMovie);
movieRouter.delete("/:movieId", deleteMovie);

module.exports = movieRouter;
