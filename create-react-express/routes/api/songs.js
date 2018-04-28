const router = require("express").Router();
const dataController = require("../../controllers/dataController");

// Matches with "/api/articles"
router.route("/")
  .get(dataController.findAll)
  .post(dataController.create);

// Matches with "/api/articles/:id"
// router
//   .route("/:id")
//   .get(articleController.findById)
//   .put(articleController.update)
//   .delete(articleController.remove);

module.exports = router;
