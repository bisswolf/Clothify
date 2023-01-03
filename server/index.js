const express = require("express");
const db = require("./db");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const path = require("path");
dotenv.config();
// const clothModel = require("./model/clothModel");
// const userModel = require("./model/userModel");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", productRoutes);
app.use("/", userRoutes);

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => console.log(`listening on port ${port}!`));
