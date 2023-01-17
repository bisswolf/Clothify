const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
exports.makePayment = async (req, res) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Clothify",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
};

exports.sendStripeApiKey = async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_PUBLISHING_KEY });
};
