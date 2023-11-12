const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
    errors: null,
  })
}

invCont.buildbyInventoryID = async function(req, res, next) {
    const inventory_id = req.params.inventoryId
    const data = await invModel.getInventorybyID(inventory_id)
    const grid = await utilities.buildDetailGrid(data)
    let nav = await utilities.getNav()
    const invMake = data[0].inv_make
    const inventoryModel = data[0].inv_model
    res.render("./inventory/detail", {
        title: invMake +" " + inventoryModel,
        nav,
        grid,
        errors: null,
    })
}
/* ****************************************
*  Deliver mangement view
* *************************************** */
invCont.buildManagement = async function(req, res, next) {
  let nav = await utilities.getNav()
  res.render("./inventory/management", {
    title: "Management",
    nav,
    errors: null,
  })
}

/* ****************************************
*  Deliver classification mangement view
* *************************************** */
invCont.buildClassManagement = async function(req, res, next) {
  let nav = await utilities.getNav()
  res.render("./inventory/add-classification", {
    title: "Add Classification",
    nav,
    errors: null,
  })
}
/* ****************************************
*  Deliver inventory mangement view
* *************************************** */
invCont.buildInventoryManagement = async function(req, res, next) {
  let nav = await utilities.getNav()
  res.render("./inventory/add_inventory", {
    title: "Add Inventory",
    nav,
    errors: null,
  })
}
  /* ****************************************
*  add classification
* *************************************** */
async function add_classification(req, res) {
  let nav = await utilities.getNav()
  const {} = req.body
  const regResult = await invModel.add_classification(
  )

  if (regResult) {
    req.flash(
      "notice",
      `Classification Added.`
    )
    res.status(201).render("/inv/add-classification", {
      title: "Add Classification",
      nav,
    })
  } else {
    req.flash("notice", "Sorry, the attempt failed.")
    res.status(501).render("inv/add-classification", {
      title: "Add Classification",
      nav,
    })
  }
}
  /* ****************************************
*  add inventory
* *************************************** */
async function add_inventory(req, res) {
  let nav = await utilities.getNav()
  const {} = req.body
  const regResult = await invModel.add_inventory(
  )

  if (regResult) {
    req.flash(
      "notice",
      `inventory Added.`
    )
    res.status(201).render("/inv/add-inventory", {
      title: "Add inventory",
      nav,
    })
  } else {
    req.flash("notice", "Sorry, the attempt failed.")
    res.status(501).render("inv/add-inventory", {
      title: "Add inventory",
      nav,
    })
  }
}

module.exports = invCont