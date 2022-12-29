import { eventConstants } from "../_constants";

export function retailerdetaillist(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_DETAIL_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_DETAIL_LIST_SUCCESS:
      return {
        retailerdetaillist: action.retailerdetaillist,
      };
    case eventConstants.RETAILER_DETAIL_LIST_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.RETAILER_DETAIL_LIST_CLEAR_STATE:
        return {
          retailerdetaillist: undefined,
        };

    
    default:
      return state;
  }
}