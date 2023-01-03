const User = require("../model/userModel");
exports.registerUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.send("User created successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      res.send(user);
    } else {
      res.status(400).json({ message: "invalid credentials" });
    }
  } catch (error) {
    res.status(400).json({ message: "invalid credentials" });
  }
};

// exports.updateUser = async (req, res) => {
//   try {
//     await User.findOneAndUpdate({ _id: req.body._id }, req.body);
//     const user = await User.findOne({ _id: req.body._id });
//     res.send(user);
//   } catch (error) {
//     return res.status(400).json(error);
//   }
// };
