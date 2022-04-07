import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD, CART_CLEAR, } from "../constants/constants";

export const cartReducers = (state = { cartProducts: [], shippingAddress: {} }, action) => {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      const cartProduct = action.payload;
      const productInCart = state.cartProducts.find(
        (p) => p.product === cartProduct.product
      );

      if (productInCart) {
        return {
          ...state,
          cartProducts: state.cartProducts.map((p) =>
            p.product === productInCart.product ? cartProduct : p
          ),
        };
      } else {
        return { ...state, cartProducts: [...state.cartProducts, cartProduct] };
      }

    case CART_REMOVE_PRODUCT:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (p) => p.product !== action.payload
        ),
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload
      };
    
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload
      };

    case CART_CLEAR:
      return {
        ...state,
        cartProducts: []
      };

    default:
      return state;
  }
};
