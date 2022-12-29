import { eventConstants } from "../_constants";

export function retailersubdistrict(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_SUB_DISTRICT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_SUB_DISTRICT_SUCCESS:
      return {
        retailersubdistrict: action.retailersubdistrict,
      };
    case eventConstants.RETAILER_SUB_DISTRICT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}