const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/Products");
exports.findAll = asyncHandler(async (req, res, next) => {
  const data = await Product.find();
  res.status(200).send({ success: true, data: data });
});
exports.findOneById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = await Product.findById(id);
  res.status(200).send({ success: true, data: data });
});
