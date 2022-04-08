import axios from "axios";
import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/constants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_PRODUCT,
    payload: {
      product: data._id,
      name: data.name,
      imageSrc: data.imageSrc,
      price: data.price,
      numInStock: data.numInStock,
      qty,
    },
  });

  localStorage.setItem(
    "shoppingCart",
    JSON.stringify(getState().shoppingCart.cartProducts)
  );
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_PRODUCT,
    payload: id,
  });

  localStorage.setItem(
    "shoppingCart",
    JSON.stringify(getState().shoppingCart.cartProducts)
  );
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
