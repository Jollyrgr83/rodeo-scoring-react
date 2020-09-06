// VIEW API ROUTES
// router
const router = require("express").Router();
// bring in controllers
const allController = require("../../controllers/allController");
const competitorController = require("../../controllers/competitorController");
const eventController = require("../../controllers/eventController");
const organizationController = require("../../controllers/organizationController");
const scoreController = require("../../controllers/scoreController");
const tierController = require("../../controllers/tierController");
const yearsController = require("../../controllers/yearsController");
// configure routes
router.route("/all")
  // GET: retrieves all items for view page
  .get(allController.findAll)

router.route("/tier")
  // GET: retrieves applicable items from TIER
  .get(tierController.findAll)

router.route("/event")
  // GET: retrieves applicable items from EVENT
  .get(eventController.findAll)

router.route("/organization")
  // GET: retrieves applicable items from ORGANIZATION
  .get(organizationController.findAll)

router.route("/year")
  // GET: retrieves applicable items from YEARS
  .get(yearsController.findAll)

  // POST: receives new customer orders from CUSTOMERPAGE
  // .post(orderController.newOrder);

// router.route("/active/:customerID")
  // GET: retrieves and sends active orders for CUSTOMERPAGE
  // .get(orderController.findOrdersByCustomer);

  // router.route("/receipt/:orderID")
  // GET: generates and sends pdf
  // .get(orderController.createPDF);

module.exports = router;
