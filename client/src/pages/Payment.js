import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { message, Typography } from "antd";
import { createOrder } from "../redux/actions/orderActions";
import axios from "axios";
const { Title } = Typography;
const Payment = () => {
  const data = useSelector((state) => state.cartReducer);

  const shippingAddress = data.shippingAddress;
  const cartItems = data.cartItems;

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const paymentData = {
    amount: Number(orderInfo.totalPrice * 100),
  };

  const order = {
    user: { id: user._id, username: user.username },
    shippingAddress,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.taxAmount,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://clothify-server.onrender.com/payment/process",
        paymentData
      );

      const client_secret = response.data.client_secret;

      // if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.username,
            address: {
              line1: shippingAddress.address,
              city: shippingAddress.city,
              postal_code: shippingAddress.postalCode,
              country: "IN",
            },
          },
        },
      });
      console.log(result);
      if (result.error) {
        payBtn.current.disabled = false;

        message.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createOrder(order));

          window.location.href = "/payment/success";
        } else {
          message.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      // payBtn.current.disabled = false;
      // alert.error(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Title>Card Info</Title>
          <div>
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            ref={payBtn}
            value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            className="paymentFormBtn"
          />
        </form>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Payment;
