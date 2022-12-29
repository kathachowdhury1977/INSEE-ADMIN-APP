import { eventConstants } from "../_constants";

export function retailerloyaltylist(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_LOYALTY_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_LOYALTY_LIST_SUCCESS:
      return {
        retailerloyaltylist: action.retailerloyaltylist,
      };
    case eventConstants.RETAILER_LOYALTY_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}