import axios from "axios";
import {
  SEARCH_GET,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from "../constants/constants";

export const displaySearch = (name) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_GET });

    const { data } = await axios.get(`/api/products/`);

    dispatch({ type: SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SEARCH_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
