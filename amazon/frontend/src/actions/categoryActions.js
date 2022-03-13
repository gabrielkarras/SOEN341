import axios from 'axios'
import { CATEGORY_GET, CATEGORY_SUCCESS, CATEGORY_FAILURE } from '../constants/constants'

export const displayDetailedProduct = (id) => async (dispatch) => {
    try {
        dispatch({type: CATEGORY_GET})

        const { data } = await axios.get(`/api/products/${category}`)

        dispatch({type: CATEGORY_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:CATEGORY_FAILURE, payload:error.response && error.response.data.message ? error.response.data.message : error.message,})
    }
}