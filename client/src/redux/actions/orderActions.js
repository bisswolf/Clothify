import axios from "axios";
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "ORDER_CREATE_REQUEST",
    });

    const user = JSON.parse(localStorage.getItem("user"));
    const reqData = { user, order };
    console.log(reqData);
    const data = await axios.post(`/orders`, reqData);
    console.log(data);

    dispatch({
      type: "ORDER_CREATE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: "ORDER_CREATE_FAIL",
      payload: message,
    });
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "ORDER_DETAILS_REQUEST",
    });

    const { data } = await axios.get(`/orders/${id}`);
    console.log(data);
    dispatch({
      type: "ORDER_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: "ORDER_DETAILS_FAIL",
      payload: message,
    });
  }
};

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "ORDER_PAY_REQUEST",
      });

      const { data } = await axios.put(
        `https://clothify-server.onrender.com/orders/${orderId}/pay`,
        paymentResult
      );

      dispatch({
        type: "ORDER_PAY_SUCCESS",
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: "ORDER_PAY_FAIL",
        payload: message,
      });
    }
  };
export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "ORDER_LIST_MY_REQUEST",
    });
    const user = JSON.parse(localStorage.getItem("user"));

    const { data } = await axios.post(
      `https://clothify-server.onrender.com/myorders`,
      user
    );
    dispatch({
      type: "ORDER_LIST_MY_SUCCESS",
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: "ORDER_LIST_MY_FAIL",
      payload: message,
    });
  }
};
