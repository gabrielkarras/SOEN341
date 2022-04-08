import axios from "axios";
import {
  DETAILED_PRODUCT_GET,
  DETAILED_PRODUCT_SUCCESS,
  DETAILED_PRODUCT_FAILURE,
} from "../constants/constants";

export const displayDetailedProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DETAILED_PRODUCT_GET });
    
    const { data } = await axios.get(`/api/products/${id}`);
    
    dispatch({ type: DETAILED_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DETAILED_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
