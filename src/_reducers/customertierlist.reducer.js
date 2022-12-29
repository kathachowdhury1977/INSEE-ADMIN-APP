import { eventConstants } from "../_constants";

export function customertierlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.CUSTOMER_TIER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CUSTOMER_TIER_LIST_SUCCESS:
      return {
        customertierlist: action.customertierlist,
      };
    case eventConstants.CUSTOMER_TIER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}