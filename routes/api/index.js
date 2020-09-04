// API INDEX
// router
const router = require("express").Router();
// bring in specific api routes
const viewRoutes = require("./view");
const yearRoutes = require("./year");
const competitorRoutes = require("./competitor");
const scoreRoutes = require("./score");
const reportRoutes = require("./report");

// configure api routes
router.use("/view", viewRoutes);
router.use("/year", yearRoutes);
router.use("/competitor", competitorRoutes);
router.use("/score", scoreRoutes);
router.use("/report", yearRoutes);

module.exports = router;
