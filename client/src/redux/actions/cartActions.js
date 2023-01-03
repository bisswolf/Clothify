import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const res = await axios.get(`/products/${id}`);

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

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: "SAVE_SHIPPING_ADDRESS",
    payload: data,
  });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
