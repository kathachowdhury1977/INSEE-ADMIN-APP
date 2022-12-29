import { eventConstants } from "../_constants";

export function searchretailer(state = {}, action) {
  switch (action.type) {
    case eventConstants.SEARCH_RETAILER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SEARCH_RETAILER_SUCCESS:
      return {
        searchretailer: action.searchretailer,
      };
    case eventConstants.SEARCH_RETAILER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}