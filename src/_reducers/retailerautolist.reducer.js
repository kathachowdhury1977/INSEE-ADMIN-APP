import { eventConstants } from "../_constants";

export function retailerautolist(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_AUTO_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_AUTO_LIST_SUCCESS:
      return {
        retailerautolist: action.retailerautolist,
      };
    case eventConstants.RETAILER_AUTO_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}