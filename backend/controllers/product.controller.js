const Product = require("../models/product.model");

const getproduct = async (req, res) => {
  try {
    const proucts = await Product.find({});
    res.status(200).json(proucts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      res.status(500).send({ message: "Product Not Found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const UpdateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).send({ mesage: "Product Not Found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error.mesage);
    res.status(500).send({ mesage: "Error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).send({ message: "Product Not Found" });
    }
    res.status(200).send({ message: "Product Delted" });
  } catch (error) {
    res.status(500).send({ message: error.mesage });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (!Product) {
      res.status(500).send({ mesage: "Not added" });
    }
    res.status(200).send({ mesage: "Added Product" });
  } catch (error) {
    res.status(500).send({ message: error.mesage });
  }
};

module.exports = {
  getproduct,
  getProductById,
  UpdateProduct,
  deleteProduct,
  addProduct,
};
