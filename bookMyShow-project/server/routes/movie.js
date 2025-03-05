const movieRouter = require("express").Router();
const {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMovieById
} = require("../controller/movie");

movieRouter.post("/", addMovie);
movieRouter.get("/", getAllMovies);
movieRouter.put("/", updateMovie);
movieRouter.delete("/:movieId", deleteMovie);
movieRouter.get("/:movieId", getMovieById);


module.exports = movieRouter;
