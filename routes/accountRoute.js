const express = require("express")
const router = new express.Router() 
const utilities = require("../utilities/index")
const accController = require("../controllers/accountController")
const regValidate = require("../utilities/account-validation")
router.get("/login", utilities.handleErrors(accController.buildLogin))
router.get("/register", utilities.handleErrors(accController.buildRegistration))
router.post(
    "/register",
    regValidate.registationRules(),
    regValidate.checkRegData,
    utilities.handleErrors(accController.registerAccount)
  )
router.post(
    "/login",
    regValidate.loginRules(),
    regValidate.checklogData,
    utilities.handleErrors(accController.loginAccount)
  )
module.exports = router;