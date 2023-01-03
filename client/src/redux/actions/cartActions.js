import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  console.log(getState());
  const res = await axios.get(`/products/${id}`);
  console.log(res.data);
  console.log(getState());
  dispatch({
    type: "CART_ADD_ITEM",
    payload: {
      product: res.data._id,
      name: res.data.name,
      image: res.data.img[0].url,
      price: res.data.price,
      qty: qty,
    },
  });
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: "CART_REMOVE_ITEM",
    payload: id,
  });
  console.log(getState());
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const saveShippingAddress = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: "SAVE_SHIPPING_ADDRESS",
    payload: data,
  });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
