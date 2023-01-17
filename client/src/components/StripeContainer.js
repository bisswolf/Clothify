import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Payment from "../pages/Payment";
const PUBLIC_KEY =
  "pk_test_51MMSvkSCtab5Vlj3PE1MBNGcqKq0GLk5goRZEl9UxQ3repvgwjMEdpjWVBURIay3mBVqRzlkztC4xBA3zbIQC0eg00K9F7hfvJ";
const stripeTestPromise = loadStripe(PUBLIC_KEY);
const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <Payment />
    </Elements>
  );
};

export default StripeContainer;
