const mongoose = require("mongoose");

const PromoSchema = mongoose.Schema({
  name: { type: String },
  path: { type: String },
  description: { type: String },
});
const Promo = mongoose.model("Promo", PromoSchema);
module.exports = Promo;
