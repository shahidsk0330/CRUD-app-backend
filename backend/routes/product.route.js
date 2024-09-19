const express = require("express");
const router = express.Router();
const {
  getproduct,
  getProductById,
  UpdateProduct,
  deleteProduct,
  addProduct,
} = require("../controllers/product.controller.js");

//Read the products list
router.get("/", getproduct);
router.get("/:id", getProductById);
router.put("/:id", UpdateProduct);
router.delete("/:id", deleteProduct);
router.post("/", addProduct);

module.exports = router;
