import { LIFESTYLE_PRODUCTS_GET, LIFESTYLE_PRODUCTS_SUCCESS, LIFESTYLE_PRODUCTS_FAILURE } from '../constants/constants'

export const lifestyleProductsReducers = (state = { lifestyleProducts: [] }, action) => {
    switch(action.type){
        
        case LIFESTYLE_PRODUCTS_GET:
            return { loading: true, lifestyleProducts: [] }

        case LIFESTYLE_PRODUCTS_SUCCESS:
            return { loading: false, lifestyleProducts: action.payload }

        case LIFESTYLE_PRODUCTS_FAILURE:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}