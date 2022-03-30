import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { detailedProductReducer } from "./reducers/detailedProductReducers";
import { cartReducers } from "./reducers/cartReducers";
import { categoryReducers } from "./reducers/categoryReducers";

const reducer = combineReducers({
  detailedProduct: detailedProductReducer,
  shoppingCart: cartReducers,
  categoryProducts: categoryReducers,
});

const shoppingCartStorage = localStorage.getItem("shoppingCart")
  ? JSON.parse(localStorage.getItem("shoppingCart"))
  : [];

const shippingAddressStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  shoppingCart: { cartProducts: shoppingCartStorage,
                  shippingAddress: shippingAddressStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
