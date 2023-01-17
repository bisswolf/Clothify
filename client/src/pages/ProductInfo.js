import { Button, Col, Form, Image, Row, Select } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { getDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { clothes } = useSelector((state) => state.clothesDetailReducer);
  const cart = useSelector((state) => state.cartReducer);
  function onFinished(values) {
    const qty = values.Quantity;

    dispatch(addToCart(id, qty));
  }

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const cloth = clothes;

  return (
    <div>
      <div>
        {cloth ? (
          <div>
            <Navigation />
            <br />
            <br />
            <Row>
              <Col span={12}>
                <Image
                  style={{ marginLeft: "2rem" }}
                  width={250}
                  height={350}
                  preview={false}
                  src={cloth.img[0].url}
                />
              </Col>
              <Col span={12}>
                <div className="description">
                  <h3>{cloth.name}</h3>
                  <br />
                  <h3>Price ₹{cloth.price}</h3>
                  <br />
                  <h5>Fit: {cloth.fit}</h5>
                  <br />
                  <h5>Material: {cloth.material}</h5>
                  <br />
                  <Form onFinish={onFinished} initialValues={{ Quantity: "1" }}>
                    <Form.Item name="Quantity" label="Quantity">
                      <Select
                        placeholder="Quantity"
                        options={[
                          {
                            value: "1",
                            label: "1",
                          },
                          {
                            value: "2",
                            label: "2",
                          },
                          {
                            value: "3",
                            label: "3",
                          },
                          {
                            value: "4",
                            label: "4",
                          },
                        ]}
                      />
                      {/* <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option> */}
                    </Form.Item>

                    <br />
                    <br />

                    <Button htmlType="submit" type="primary" danger>
                      Add item
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
            <br />
          </div>
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
