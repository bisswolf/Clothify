import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import { Link, Navigate, useParams } from "react-router-dom";
import { Col, Row, Card, Image, Button, message } from "antd";
import { FiMinusSquare } from "react-icons/fi";
import { removeFromCart } from "../redux/actions/cartActions";

const Cart = () => {
  const id = useParams();
  const productId = id.id;
  const dispatch = useDispatch();
  function onClickHandler() {
    message.error("Please login");
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  }
  const cartItems = localStorage.getItem("cartItems");
  const user = localStorage.getItem("user");

  const cart = !cartItems ? [] : JSON.parse(cartItems);

  function getAmount() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum = sum + cart[i].price * cart[i].qty;
    }
    return sum;
  }

  const deleteItem = (id) => {
    dispatch(removeFromCart(id));
    window.location.reload();
  };

  const amount = cart.length > 0 ? getAmount() : 0;
  console.log(amount);
  // const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  //   const history = useNavigate();
  // const cart = useSelector((state) => state.cartReducer);
  // const { cartItems } = cart;
  // console.log(cart);
  // console.log(cartItems);
  // useEffect(() => {
  //   if (productId) {
  //     dispatch(addToCart(productId));
  //   }
  // }, [dispatch, productId]);

  return (
    <div>
      <Navigation />
      {cart.length > 0 ? (
        <div>
          <br />
          {cart.map((item) => (
            <div key={item.product}>
              <Row justify="center" align="middle">
                <Card
                  size="small"
                  style={{
                    width: "20em",
                    borderTop: "5px solid violet",
                    borderRight: "5px solid violet",
                    borderBottom: "5px solid violet",
                  }}
                  bordered={false}
                >
                  {" "}
                  <Image
                    width={84}
                    height={84}
                    src={item.image}
                    preview={false}
                  />
                  <div style={{ marginLeft: "10em", marginTop: "-6em" }}>
                    {" "}
                    <p>
                      <b>{item.name}</b>
                    </p>
                    <p>Price: {item.price}</p>
                    <div style={{ marginTop: "-3%" }}>Quantity: {item.qty}</div>
                    <Button
                      size="small"
                      onClick={() => deleteItem(item.product)}
                    >
                      Remove
                    </Button>
                  </div>
                </Card>
              </Row>{" "}
              <br />
            </div>
          ))}
          <Row justify="center" align="middle">
            <Card
              style={{
                width: "20em",
                border: "5px solid violet",
                fontSize: "1.3em",
              }}
              bordered={false}
            >
              <b>Amount : {amount}</b>
            </Card>
            <br />
          </Row>
          <br />
          <Row justify="center" align="middle">
            {user ? (
              <Button type="primary" href="/checkout">
                Proceed to checkout
              </Button>
            ) : (
              <Button type="primary" onClick={onClickHandler}>
                Proceed to checkout
              </Button>
            )}
          </Row>
          <br />
        </div>
      ) : (
        <div>No items in your cart</div>
      )}
    </div>
  );
};

export default Cart;
