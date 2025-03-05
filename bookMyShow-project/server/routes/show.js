const showRouter = require("express").Router();
const {
  addShow,
  updateShow,
  deleteShow,
  getAllShowsByTheatre,
  getAllShowsByMovie,
  getShowById
} = require("../controller/show");

showRouter.post("/", addShow);
showRouter.put("/", updateShow);
showRouter.delete("/:showId", deleteShow);
showRouter.get("/:showId", getShowById);
showRouter.post("/by-theatre", getAllShowsByTheatre);
showRouter.post("/of-theatre", getAllShowsByMovie);

module.exports = showRouter;
