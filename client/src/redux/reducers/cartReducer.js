import { message } from "antd";

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("cartItems");

  if (!localCartData) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};
const initialState = { cartItems: getLocalCartData(), shippingAddress: {} };
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const item = action.payload;
      console.log(item);
      console.log(state);
      const cartArray = [...state.cartItems];
      const itemExists = cartArray.find((x) => x.product === item.product)
        ? true
        : false;
      console.log(itemExists);
      if (itemExists) {
        message.error("Item already exists");
        return {
          ...state,
          itemExists: itemExists,
        };
      } else {
        message.success("Item added to cart");
        const cartItems = [...state.cartItems, item];
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        return {
          ...state,
          cartItems: cartItems,
        };
      }

    case "CART_REMOVE_ITEM":
      const cart = state.cartItems.filter((x) => x.product !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(cart));
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case "SAVE_SHIPPING_ADDRESS":
      console.log(action.payload);
      return {
        ...state,
        shippingAddress: action.payload,
      };
    // case "CART_SAVE_PAYMENT_METHOD":
    //   return {
    //     ...state,
    //     paymentMethod: action.payload,
    //   };
    // case "CART_CLEAR_ITEMS":
    //   return {
    //     ...state,
    //     cartItems: [],
    //   };
    default:
      return state;
  }
};
