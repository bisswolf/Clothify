import { message } from "antd";
import axios from "axios";

export const registerUser = (values) => async (dispatch) => {
  try {
    await axios.post("/register", values);
    message.success("user registered successfully");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  } catch (error) {
    message.error("An error occured");
    console.log(error);
  }
};

export const loginUser = (values) => async (dispatch) => {
  try {
    const user = await axios.post("/login", values);
    message.success("Login successfull");
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user.data));
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    message.error("Invalid credentials");
  }
};
