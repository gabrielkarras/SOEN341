import axios from 'axios'
import { MEDICAL_PRODUCTS_GET, MEDICAL_PRODUCTS_SUCCESS, MEDICAL_PRODUCTS_FAILURE } from '../constants/constants'

export const displayMedicalProducts = (category) => async (dispatch) => {
    try {
        dispatch({type: MEDICAL_PRODUCTS_GET})
        
        const { data } = await axios.get(`/api/products/${category}`)

        dispatch({type: MEDICAL_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:MEDICAL_PRODUCTS_FAILURE, payload:error.response && error.response.data.message ? error.response.data.message : error.message,})
    }
}