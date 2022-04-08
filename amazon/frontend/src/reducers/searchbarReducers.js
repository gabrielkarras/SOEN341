import {
  SEARCH_GET,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from "../constants/constants";

export const searchbarReducers = (state = { Searchproduct: [] }, action) => {
  switch (action.type) {
    case SEARCH_GET:
      return { loading: true, Searchproduct: [] };

    case SEARCH_SUCCESS:
      return { loading: false, Searchproduct: action.payload };

    case SEARCH_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
