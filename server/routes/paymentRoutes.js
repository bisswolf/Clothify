const express = require("express");
const router = express.Router();
const {
  makePayment,
  sendStripeApiKey,
} = require("../controller/paymentController");

router.post("/payment/process", makePayment);
router.get("/stripeapikey", sendStripeApiKey);
module.exports = router;
