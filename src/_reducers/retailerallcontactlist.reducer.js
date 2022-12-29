import { eventConstants } from "../_constants";

export function retailerallcontactlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_ALL_CONTACT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_ALL_CONTACT_LIST_SUCCESS:
      return {
        retailerallcontactlist: action.retailerallcontactlist,
      };
    case eventConstants.RETAILER_ALL_CONTACT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}