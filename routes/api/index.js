const router = require("express").Router();
const songRoutes = require("./songs");

// NYT routes
router.use("/songs", songRoutes);


module.exports = router;