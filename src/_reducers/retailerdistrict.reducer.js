import { eventConstants } from "../_constants";

export function retailerdistrict(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_DISTRICT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_DISTRICT_SUCCESS:
      return {
        retailerdistrict: action.retailerdistrict,
      };
    case eventConstants.RETAILER_DISTRICT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}