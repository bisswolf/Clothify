import React from "react";
import { Row, Col, Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/userActions";
import { Link } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  function register(values) {
    if (values.password !== values.confirmpassword) {
      message.error("passwords don't match");
    } else {
      console.log(values);
      dispatch(registerUser(values));
    }
  }

  return (
    <div className="login">
      <Row justify="center">
        <Col lg={10} sm={24} className="bs p-5">
          <h3>Register</h3>
          <hr />
          <Form layout="vertical" onFinish={register}>
            <Form.Item
              label="username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item
              label="confirm password"
              name="confirmpassword"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
            <Button className="mb-3" htmlType="submit">
              Register
            </Button>
            <br />
            <Link className="mt-3" to="/login">
              Already registered ?, Click here to login
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
