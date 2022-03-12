import axios from 'axios'
import { ENTERTAINMENT_PRODUCTS_GET, ENTERTAINMENT_PRODUCTS_SUCCESS, ENTERTAINMENT_PRODUCTS_FAILURE } from '../constants/constants'

export const displayEntertainmentProducts = (category) => async (dispatch) => {
    try {
        
        dispatch({type: ENTERTAINMENT_PRODUCTS_GET})
        console.log(category)
        const { data } = await axios.get(`/api/products/${category}`)
        console.log(axios.get(`/api/products/${category}`))
        console.log(data)
        dispatch({type: ENTERTAINMENT_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:ENTERTAINMENT_PRODUCTS_FAILURE, payload:error.response && error.response.data.message ? error.response.data.message : error.message,})
    }
}