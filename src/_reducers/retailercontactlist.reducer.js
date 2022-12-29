import { eventConstants } from "../_constants";

export function retailercontactlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_CONTACT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_CONTACT_LIST_SUCCESS:
      return {
        retailercontactlist: action.retailercontactlist,
      };
    case eventConstants.RETAILER_CONTACT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}