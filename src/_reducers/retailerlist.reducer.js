import { eventConstants } from "../_constants";

export function retailerlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_LIST_SUCCESS:
      return {
        retailerlist: action.retailerlist,
      };
    case eventConstants.RETAILER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}