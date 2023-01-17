import { Typography, Row, Col, Button } from "antd";
import { BsCheckLg } from "react-icons/bs";
import Navigation from "../components/Navigation";
const OrderSuccess = () => {
  const { Title } = Typography;
  return (
    <div style={{ height: "100em" }}>
      <Navigation />
      <div style={{ marginTop: "4em" }}>
        <Row justify="center" align="middle">
          <Col>
            <Title strong>Order Confirmed</Title>
          </Col>
        </Row>
        <Row justify="center" align="middle" style={{ marginTop: "3em" }}>
          <Col>
            <Title>
              <BsCheckLg color="green" />
            </Title>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col>
            <Title level={3}>Thank you for your purchase</Title>
            <br />
            {/* <Title level={5}>Your order Id id is</Title> */}
            <br />
            <Button
              style={{
                backgroundColor: "green",
                color: "white",
                marginLeft: "25%",
              }}
              href="/"
            >
              Continue shopping
            </Button>
          </Col>
        </Row>
        <br />
      </div>
    </div>
  );
};

export default OrderSuccess;
