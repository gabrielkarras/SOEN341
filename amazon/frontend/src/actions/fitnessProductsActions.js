import axios from 'axios'
import { FITNESS_PRODUCTS_GET, FITNESS_PRODUCTS_SUCCESS, FITNESS_PRODUCTS_FAILURE } from '../constants/constants'

export const displayFitnessProducts = (category) => async (dispatch) => {
    try {
        
        dispatch({type: FITNESS_PRODUCTS_GET})
        console.log(category)
        const { data } = await axios.get(`/api/products/${category}`)
        console.log(axios.get(`/api/products/${category}`))
        console.log(data)
        dispatch({type: FITNESS_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:FITNESS_PRODUCTS_FAILURE, payload:error.response && error.response.data.message ? error.response.data.message : error.message,})
    }
}