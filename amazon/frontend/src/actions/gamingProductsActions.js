import axios from 'axios'
import { GAMING_PRODUCTS_GET, GAMING_PRODUCTS_SUCCESS, GAMING_PRODUCTS_FAILURE } from '../constants/constants'

export const displayGamingProducts = (category) => async (dispatch) => {
    try {
        dispatch({type: GAMING_PRODUCTS_GET})
        
        const { data } = await axios.get(`/api/products/${category}`)
        
        dispatch({type: GAMING_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:GAMING_PRODUCTS_FAILURE, payload:error.response && error.response.data.message ? error.response.data.message : error.message,})
    }
}