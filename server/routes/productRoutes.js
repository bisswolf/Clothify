const express = require("express");
const router = express.Router();
const {
  getAllClothes,
  getProductById,
} = require("../controller/productController");
router.get("/products", getAllClothes);
router.get("/products/:id", getProductById);

module.exports = router;
