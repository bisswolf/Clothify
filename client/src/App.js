import { useEffect } from "react";
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
import Payment from "./pages/Payment";

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
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
