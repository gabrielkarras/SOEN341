import { GAMING_PRODUCTS_GET, GAMING_PRODUCTS_SUCCESS, GAMING_PRODUCTS_FAILURE } from '../constants/constants'

export const gamingProductsReducers = (state = { gamingProducts: [] }, action) => {
    switch(action.type){
        case GAMING_PRODUCTS_GET:
            return { loading: true, gamingProducts: [] }

        case GAMING_PRODUCTS_SUCCESS:
            return { loading: false, gamingProducts: action.payload }

        case GAMING_PRODUCTS_FAILURE:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}