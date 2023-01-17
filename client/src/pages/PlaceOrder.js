import { Typography, List, Image, Col, Row, Card, Button } from "antd";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;

const PlaceOrder = () => {
  const shipping = useSelector((state) => state.cartReducer);
  const shippingAddress = shipping.shippingAddress;
  const orderItems = shipping.cartItems;

  function getAmount() {
    let sum = 0;
    for (let i = 0; i < orderItems.length; i++) {
      sum = sum + orderItems[i].price * orderItems[i].qty;
    }
    return sum;
  }

  const placeOrderHandler = () => {
    const data = {
      itemsAmount,
      taxAmount,
      shippingCharges: 0,
      totalPrice: itemsAmount + taxAmount,
    };
    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    window.location.href = "/payment";
  };

  const itemsAmount = getAmount();
  const taxAmount = Math.round(itemsAmount * 0.18);

  return (
    <div>
      <Navigation />
      <Row>
        <Col span={16} style={{ padding: "0 2%" }}>
          <Title level={2} style={{ marginTop: ".5em", marginLeft: "2em" }}>
            Shipping info
          </Title>
          <Text style={{ marginLeft: "6em" }}>
            Address: {shippingAddress.Address} {shippingAddress.city}{" "}
            {shippingAddress.postalcode} {shippingAddress.country}
          </Text>
          <hr />

          <Title level={2} style={{ marginLeft: "2em" }}>
            Payment Method
          </Title>
          <Text style={{ marginLeft: "6em" }}>Method: Stripe/Card</Text>
          <hr />
          <br />
          <Title level={2} style={{ marginLeft: "2em" }}>
            Order Items
          </Title>
          <List style={{ marginLeft: "6em", marginRight: "40%" }}>
            {orderItems.map((item) => {
              return (
                <List.Item key={item.product}>
                  <span style={{ display: "flex" }}>
                    <Image
                      src={item.image}
                      height={20}
                      width={20}
                      preview={false}
                    />
                    <p style={{ marginLeft: "2em" }}>
                      {item.name}
                      {"  "}
                    </p>
                  </span>
                  <span style={{ justifyContent: "end" }}>
                    {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
                  </span>
                </List.Item>
              );
            })}
          </List>
        </Col>
        <Col span={7}>
          <Card>
            <List>
              <List.Item>
                <Title level={2}>Order Summary</Title>
              </List.Item>
              <List.Item style={{ display: "flex" }}>
                Items:
                <span>₹{itemsAmount}</span>
              </List.Item>
              <List.Item style={{ display: "flex" }}>
                Shipping:
                <span>₹0</span>
              </List.Item>
              <List.Item style={{ display: "flex" }}>
                GST:
                <span>₹{taxAmount}</span>
              </List.Item>
              <List.Item style={{ display: "flex" }}>
                Total:
                <span>₹{taxAmount + itemsAmount}</span>
              </List.Item>
              <List.Item style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  style={{ backgroundColor: "#060459", color: "white" }}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </List.Item>
            </List>
          </Card>
        </Col>
      </Row>
      <br />
    </div>
  );
};

export default PlaceOrder;
