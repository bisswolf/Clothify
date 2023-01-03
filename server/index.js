const express = require("express");
const db = require("./db");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary").v2;
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
// const clothModel = require("./model/clothModel");
// const userModel = require("./model/userModel");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", productRoutes);
app.use("/", userRoutes);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(port, () => console.log(`listening on port ${port}!`));
