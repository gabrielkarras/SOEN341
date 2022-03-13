import { FITNESS_PRODUCTS_GET, FITNESS_PRODUCTS_SUCCESS, FITNESS_PRODUCTS_FAILURE } from '../constants/constants'

export const fitnessProductsReducers = (state = { fitnessProducts: [] }, action) => {
    switch(action.type){
        case FITNESS_PRODUCTS_GET:
            return { loading: true, fitnessProducts: [] }

        case FITNESS_PRODUCTS_SUCCESS:
            return { loading: false, fitnessProducts: action.payload }

        case FITNESS_PRODUCTS_FAILURE:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}