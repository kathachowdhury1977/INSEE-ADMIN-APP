import { eventConstants } from "../_constants";

export function retailerloyaltysearch(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_LOYALTY_SEARCH_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_LOYALTY_SEARCH_SUCCESS:
      return {
        retailerloyaltysearch: action.retailerloyaltysearch,
      };
    case eventConstants.RETAILER_LOYALTY_SEARCH_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}