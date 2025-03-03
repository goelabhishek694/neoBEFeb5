const showRouter = require("express").Router();
const {
  addShow,
  updateShow,
  deleteShow,
  getAllShowsByTheatre,
  getAllShowsByMovie
} = require("../controller/show");

showRouter.post("/", addShow);
showRouter.put("/", updateShow);
showRouter.delete("/:showId", deleteShow);
showRouter.post("/by-theatre", getAllShowsByTheatre);
showRouter.post("/of-theatre", getAllShowsByMovie);

module.exports = showRouter;
