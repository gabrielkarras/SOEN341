import { PETS_PRODUCTS_GET, PETS_PRODUCTS_SUCCESS, PETS_PRODUCTS_FAILURE } from '../constants/constants'

export const petsProductsReducers = (state = { petsProducts: [] }, action) => {
    switch(action.type){
        case PETS_PRODUCTS_GET:
            return { loading: true, petsProducts: [] }

        case PETS_PRODUCTS_SUCCESS:
            return { loading: false, petsProducts: action.payload }

        case PETS_PRODUCTS_FAILURE:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}