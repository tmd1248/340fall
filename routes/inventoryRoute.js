// Needed Resources 
const express = require("express")
const router = new express.Router() 
const utilities = require("../utilities/index")
const invController = require("../controllers/invController")
const manageValidate = require("../utilities/management-validation")
// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);
// route to build detail view 
router.get("/detail/:inventoryId", invController.buildbyInventoryID);
router.get("/add-classification", invController.buildClassManagement);
router.get("/add-inventory", invController.buildInventoryManagement);
router.get("/management", invController.buildManagement);
router.post(
    "/add-classification",
    manageValidate.addClassRules(),
    manageValidate.checkClassData,
    utilities.handleErrors(invController.add_classification)
  )
  router.post(
    "/add-inventory",
    manageValidate.addinvRules(),
    manageValidate.checkClassData,
    utilities.handleErrors(invController.add_inventory)
  )
module.exports = router;