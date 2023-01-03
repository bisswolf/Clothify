const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/userController");
const { loginUser } = require("../controller/userController");
// const { updateUser } = require("../controller/userController");
router.post("/register", registerUser);
router.post("/login", loginUser);
// router.post("/update", updateUser);

module.exports = router;
