const theatreRouter = require("express").Router();
const {
  addTheatre,
  getAllTheatres,
  updateTheatre,
  deleteTheatre,
  partnerTheatres
} = require("../controller/theatre");

theatreRouter.post("/", addTheatre);
theatreRouter.get("/", getAllTheatres);
theatreRouter.put("/", updateTheatre);
theatreRouter.delete("/:theatreId", deleteTheatre);
theatreRouter.get("/partner/:partnerId", partnerTheatres);


module.exports = theatreRouter;
