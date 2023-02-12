//modules
const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const asyncHandler = require("./middleware/asyncHandler");
const errorHandler = require("./middleware/error");
const productRoutes = require("./routes/Product.route");
const promoRoutes = require("./routes/Promo.route");
//
var cors = require("cors");
app.use(cors());
dotenv.config({ path: "./config/config.env" });
mongoose
  .connect(
    "mongodb+srv://Amazon123:Amazon123@cluster0.xqpzaoo.mongodb.net/cuApp",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => {
    console.log("DB connected".green);
  })
  .catch((err) => {
    console.log({ connect: "DB didn't connect".red, error: err });
  });
//models
const Product = require("./models/Products");
app.use(express.json());
//

app.get(
  "/",
  asyncHandler(async (req, res) => {
    res.status(200).send({ success: true, data: "success" });
  })
);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/promos", promoRoutes);
app.use(errorHandler);
//port, listen
const server = app.listen(3000, () => {
  console.log(`server ${process.env.PORT} port дээр аслаа`.rainbow);
});
//
//error automataar barij awah heseg
process.on("unhandledRejection", (err, promise) => {
  console.log(`aldaa garlaa : ${err.message}`.red.underline.red.bold);
  server.close(() => {
    process.exit(1);
  });
});
