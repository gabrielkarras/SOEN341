import {
    CREATE_ORDER,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILURE,
    CART_CLEAR,
  } from "../constants/constants";
  import axios from "axios";

export const createOrderAction = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: CREATE_ORDER })
        
        const { data } = await axios.post(`/api/order/add/`, order)
        
        dispatch({type: CREATE_ORDER_SUCCESS, payload: data})

        dispatch({type: CART_CLEAR, payload: data})
        
        localStorage.removeItem("shoppingCart")

    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }

}