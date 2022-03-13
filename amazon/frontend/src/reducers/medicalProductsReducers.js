import { MEDICAL_PRODUCTS_GET, MEDICAL_PRODUCTS_SUCCESS, MEDICAL_PRODUCTS_FAILURE } from '../constants/constants'

export const medicalProductsReducers = (state = { medicalProducts: [] }, action) => {
    switch(action.type){
        case MEDICAL_PRODUCTS_GET:
            return { loading: true, medicalProducts: [] }

        case MEDICAL_PRODUCTS_SUCCESS:
            return { loading: false, medicalProducts: action.payload }

        case MEDICAL_PRODUCTS_FAILURE:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}