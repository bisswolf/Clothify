const Product = require("../model/clothModel");
exports.getAllClothes = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
};
