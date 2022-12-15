const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  address: { type: String, required: true },
  city: { type: String, trim: true },
  pincode: { type: Number, required: true },
  email: { type: String, match: "@", required: true },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
