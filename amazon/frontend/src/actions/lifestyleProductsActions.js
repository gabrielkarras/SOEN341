import axios from 'axios'
import { LIFESTYLE_PRODUCTS_GET, LIFESTYLE_PRODUCTS_SUCCESS, LIFESTYLE_PRODUCTS_FAILURE } from '../constants/constants'

export const displayLifestyleProducts = (category) => async (dispatch) => {
    try {
        
        dispatch({type: LIFESTYLE_PRODUCTS_GET})
        console.log(category)
        const { data } = await axios.get(`/api/products/${category}`)
        console.log(axios.get(`/api/products/${category}`))
        console.log(data)
        dispatch({type: LIFESTYLE_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:LIFESTYLE_PRODUCTS_FAILURE, payload:error.response && error.response.data.message ? error.response.data.message : error.message,})
    }
}