import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import { getAllClothes } from "./redux/actions/productActions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import StripeContainer from "./components/StripeContainer";
import PlaceOrder from "./pages/PlaceOrder";
import axios from "axios";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClothes());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/productinfo/:id",
      element: <ProductInfo />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/placeorder",
      element: <PlaceOrder />,
    },

    {
      path: "/payment",
      element: <StripeContainer />,
    },
    {
      path: "/payment/success",
      element: <OrderSuccess />,
    },
    {
      path: "/myorders",
      element: <MyOrders />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
