import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { detailedProductReducer } from "./reducers/detailedProductReducers";
import { cartReducers } from "./reducers/cartReducers";
import { categoryReducers } from "./reducers/categoryReducers";
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
} from './reducers/userReducers'
import { createOrderReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
  detailedProduct: detailedProductReducer,
  shoppingCart: cartReducers,
  categoryProducts: categoryReducers,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  createOrder: createOrderReducer,
});

const shoppingCartStorage = localStorage.getItem("shoppingCart")
  ? JSON.parse(localStorage.getItem("shoppingCart"))
  : [];

const shippingAddressStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const userInfoStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  shoppingCart: {
    cartProducts: shoppingCartStorage,
    shippingAddress: shippingAddressStorage,
  },
  userLogin: { userInfo: userInfoStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
