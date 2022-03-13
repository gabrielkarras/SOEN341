import { ENTERTAINMENT_PRODUCTS_GET, ENTERTAINMENT_PRODUCTS_SUCCESS, ENTERTAINMENT_PRODUCTS_FAILURE } from '../constants/constants'

export const entertainmentProductsReducers = (state = { entertainmentProducts: [] }, action) => {
    switch(action.type){
        case ENTERTAINMENT_PRODUCTS_GET:
            return { loading: true, entertainmentProducts: [] }

        case ENTERTAINMENT_PRODUCTS_SUCCESS:
            return { loading: false, entertainmentProducts: action.payload }

        case ENTERTAINMENT_PRODUCTS_FAILURE:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}