const Product = require("../model/clothModel");
exports.getAllClothes = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
};
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};
