import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  function login(values) {
    dispatch(loginUser(values));
  }
  return (
    <div className="login">
      <Row justify="center">
        <Col lg={10} sm={24} className="bs p-5">
          <h3>Login</h3>
          <hr />
          <Form layout="vertical" onFinish={login}>
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
              <Input />
            </Form.Item>

            <Button htmlType="submit">Login</Button>
            <br />
            <Link className="mt-3" to="/register">
              Not registered ?, Click here to register
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
