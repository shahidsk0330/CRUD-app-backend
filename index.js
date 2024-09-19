const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PORT, mongoDBURL } = require("./backend/config.js");
const productRoute = require("./backend/routes/product.route.js");
const Product = require("./backend/models/product.model.js");
//Get API: Home Page
//Middelware
app.use(express.json());

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node  API Server Updated");
});

//data base connection
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is lisenting to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
