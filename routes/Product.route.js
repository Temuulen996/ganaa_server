const express = require("express");
const { findAll, findOneById } = require("../controller/product.controller");
const router = express.Router();
router.route("/").get(findAll);
router.route("/:id").get(findOneById);
module.exports = router;
