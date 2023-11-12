const utilities = require(".")
const { body, validationResult } = require("express-validator")
const validate = {}
const accountModel = require("../models/inventory-model")
  /*  **********************************
 *  add classification Data Validation Rules
 * ********************************* */
  validate.addClassRules = () => {
    return [
      body("classification_name")
        .trim()
        .isLength(1)
        .isAlphanumeric()
        .withMessage("no spaces or symbols in the classification."),
    ]
  }
    /* ******************************
 * Check data and return errors or continue to adding a new classification
 * ***************************** */
validate.checkClassData = async (req, res, next) => {
    const { classification_name } = req.body
    let errors = []
    errors = validationResult(req)
    if (!errors.isEmpty()) {
      let nav = await utilities.getNav()
      res.render("inventory/add_classification", {
        errors,
        title: "Add Classificaiton",
        nav,
        classification_name,
      })
      return
    }
    next()
  }
  /*  **********************************
 *  add classification Data Validation Rules
 * ********************************* */
  validate.addinvRules = () => {
    return [
      body("inv_make")
        .trim()
        .isLength(1)
        .isAlphanumeric()
        .withMessage("no spaces or symbols in the inputs."),
    body("inv_model")
    .trim()
    .isLength(1)
    .isAlphanumeric()
    .withMessage("no spaces or symbols in the inputs."),
    body("inv_year")
    .trim()
    .isLength(1)
    .isNumeric()
    .withMessage("no spaces or symbols in the inputs."),
    body("inv_description")
    .trim()
    .isLength(1)
    .withMessage("Have a description."),
    body("inv_price")
    .trim()
    .isLength(1)
    .isAlphanumeric()
    .withMessage("no spaces or symbols in the inputs."),
    body("inv_miles")
    .trim()
    .isLength(1)
    .isAlphanumeric()
    .withMessage("no spaces or symbols in the inputs."),
    body("inv_color")
    .trim()
    .isLength(1)
    .isAlphanumeric()
    .withMessage("no spaces or symbols in the inputs."),
    
    

]
  }
    /* ******************************
 * Check data and return errors or continue to adding a new classification
 * ***************************** */
validate.checkInvData = async (req, res, next) => {
    const { classification_name } = req.body
    let errors = []
    errors = validationResult(req)
    if (!errors.isEmpty()) {
      let nav = await utilities.getNav()
      res.render("inventory/add-inventory", {
        errors,
        title: "Add inventory",
        nav,
        classification_name,
      })
      return
    }
    next()
  }
  module.exports = validate