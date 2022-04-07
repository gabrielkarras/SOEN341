import {
    CREATE_ORDER,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_RESET,
  } from "../constants/constants";

export const createOrderReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_ORDER:
            return {
                loading: true
            }
        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            }
        case CREATE_ORDER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case CREATE_ORDER_RESET:
            return {
                
            }
        default:
            return state
    }
}