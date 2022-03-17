import axios from 'axios'
import { PETS_PRODUCTS_GET, PETS_PRODUCTS_SUCCESS, PETS_PRODUCTS_FAILURE } from '../constants/constants'

export const displayPetsProducts = (category) => async (dispatch) => {
    try {      
        dispatch({type: PETS_PRODUCTS_GET})

        const { data } = await axios.get(`/api/products/${category}`)

        dispatch({type: PETS_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:PETS_PRODUCTS_FAILURE, payload:error.response && error.response.data.message ? error.response.data.message : error.message,})
    }
}