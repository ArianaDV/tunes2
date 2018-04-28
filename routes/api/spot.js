const router = require("express").Router();
const dataController = require("../../controllers/spotifyController");

router
  .route("/")
  .get(dataController.findAll)

  module.exports = router;

  