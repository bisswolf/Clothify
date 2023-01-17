const express = require("express");
const db = require("./db");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const orderRoutes = require("./routes/orderRoutes");
const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
dotenv.config();
// const clothModel = require("./model/clothModel");
// const userModel = require("./model/userModel");
// const orderModel = require("./model/orderModel");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", productRoutes);
app.use("/", userRoutes);
app.use("/", paymentRoutes);
app.use("/", orderRoutes);

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => console.log(`listening on port ${port}!`));
