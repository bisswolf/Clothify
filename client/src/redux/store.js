import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  clothesReducer,
  clothesDetailReducer,
} from "./reducers/productReducer";
import {
  orderCreateReducer,
  orderListMyReducer,
} from "./reducers/orderReducer";
import { cartReducer } from "./reducers/cartReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  clothesReducer: clothesReducer,
  cartReducer: cartReducer,
  clothesDetailReducer: clothesDetailReducer,
  orderCreateReducer: orderCreateReducer,
  orderListMyReducer: orderListMyReducer,
});

const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
