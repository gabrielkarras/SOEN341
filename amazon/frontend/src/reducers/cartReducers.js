import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT } from '../constants/constants'

export const cartReducer = (state = { cartProducts: [] }, action) => {
    switch(action.type){
        case CART_ADD_PRODUCT:
            const cartProduct = action.payload
            const productInCart = state.cartProducts.find(p => p.product === cartProduct.product)
            if(productInCart){
                return{ ...state, cartProducts: state.cartProducts.map(p => p.product === productInCart.product ? cartProduct : p)}
            }else{
                return { ...state, cartProducts: [...state.cartProducts, cartProduct] }
            }

        case CART_REMOVE_PRODUCT:
            return {  }
        
        default:
            return state
    }
}