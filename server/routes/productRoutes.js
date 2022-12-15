const express = require("express");
const router = express.Router();
const { getAllClothes } = require("../controller/productController");
router.get("/products", getAllClothes);

module.exports = router;
