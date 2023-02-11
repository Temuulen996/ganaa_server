const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
dotenv.config({ path: "./config/config.env" });
mongoose
  .connect(
    "mongodb+srv://buyankhishig:cu_12345678@cluster0.rife2pr.mongodb.net/cu",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("didnt connect");
  });

//models
const Product = require("./models/Products");
//
app.get("/api/v1/products", async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).send({ success: true, data: data });
  } catch (err) {
    res.status(500).send({ success: false, data: err });
  }
});

const server = app.listen(3000, () => {
  console.log(`server ${process.env.PORT} port дээр аслаа`.rainbow);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`алдаа гарлаа : ${err.message}`.red.underline.red.bold);
  server.close(() => {
    process.exit(1);
  });
});
