const asyncHandler = require("../middleware/asyncHandler");
const Promo = require("../models/Promos");
exports.findAll = asyncHandler(async (req, res, next) => {
  const data = await Promo.find();
  res.status(200).send(data);
});
exports.findOneById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = await Product.findById(id);
  res.status(200).send(data);
});
