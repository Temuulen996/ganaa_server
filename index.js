//modules
const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
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
app.get("/api/v1/products", async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).send({ success: true, data: data });
  } catch (err) {
    res.status(200).send({ success: true, data: "hii" });
  }
});
app.get("/", async (req, res) => {
  res.status(200).send({ success: true, data: "success" });
});
//port, listen
app.listen(3000, () => {
  console.log(`server ${process.env.PORT} port дээр аслаа`.rainbow);
});
//
