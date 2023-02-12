//modules
const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const asyncHandler = require("./middleware/asyncHandler");
const errorHandler = require("./middleware/error");
//
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
    console.log("connected");
  })
  .catch((err) => {
    console.log({ connect: "didn't connect", error: err });
  });
//models
const Product = require("./models/Products");

//
app.get(
  "/api/v1/products",
  asyncHandler(async (req, res) => {
    const data = await Product.find();
    res.status(200).send({ success: true, data: data });
  })
);
app.get(
  "/api/v1/product/:id",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const data = await Product.findById(id);
    res.status(200).send({ success: true, data: data });
  })
);
app.get(
  "/",
  asyncHandler(async (req, res) => {
    res.status(200).send({ success: true, data: "success" });
  })
);
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
