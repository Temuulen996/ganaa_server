const express = require("express");
const { findAll, findOneById } = require("../controller/Promo.controller");
const router = express.Router();
router.route("/").get(findAll);
router.route("/:id").get(findOneById);
module.exports = router;
