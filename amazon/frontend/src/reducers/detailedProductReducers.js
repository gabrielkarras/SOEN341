import { DETAILED_PRODUCT_GET, DETAILED_PRODUCT_SUCCESS, DETAILED_PRODUCT_FAILURE } from '../constants/constants'

export const detailedProductReducer = (state = { product: {} }, action) => {
    switch(action.type){
        case DETAILED_PRODUCT_GET:
            return { loading: true, ...state }

        case DETAILED_PRODUCT_SUCCESS:
            return { loading: false, product: action.payload }

        case DETAILED_PRODUCT_FAILURE:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}