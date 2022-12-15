const mongoose = require("mongoose");
const { Schema } = mongoose;

const clothSchema = new Schema({
  name: { type: String, required: [true, "Enter name of product"], trim: true },
  img: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  gender: {
    type: String,
    required: [true, "Male / Female"],
    enum: ["Male", "Female"],
  },
  price: { type: Number, required: true },
  size: {
    type: String,
    required: true,
    enum: ["S", "M", "L", "XL", "XXL", "XXXL"],
  },
  material: { type: String, required: true },
  fit: { type: String, required: true },
  colour: { type: String, required: true },
});

const clothModel = mongoose.model("Clothes", clothSchema);

module.exports = clothModel;
