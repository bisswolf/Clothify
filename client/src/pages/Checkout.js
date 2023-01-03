import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
import { useDispatch } from "react-redux";
import Navigation from "../components/Navigation";
import { saveShippingAddress } from "../redux/actions/cartActions";
const { Title } = Typography;
const Checkout = () => {
  const dispatch = useDispatch();

  function onFinish(values) {
    console.log(values);
    dispatch(saveShippingAddress(values));
    // window.location.href = "/payment";
  }
  return (
    <div>
      <Navigation />
      <Title align="middle" style={{ marginTop: ".5em" }}>
        SHIPPING
      </Title>
      <Row justify="center" style={{ marginTop: "5em" }}>
        <Col>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Address"
              name="Address"
              rules={[
                {
                  required: true,
                  message: "Please enter your address",
                },
              ]}
            >
              <Input style={{ width: "30em" }} />
            </Form.Item>

            <Form.Item
              label="City"
              name="city"
              labelCol={{
                span: 4,
              }}
              rules={[
                {
                  required: true,
                  message: "Please enter city",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Postalcode"
              name="postalcode"
              rules={[
                {
                  required: true,
                  message: "Please enter postal code",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Country"
              name="country"
              rules={[
                {
                  required: true,
                  message: "Please enter country",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 10,
                span: 20,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Checkout;
