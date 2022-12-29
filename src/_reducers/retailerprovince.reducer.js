import { eventConstants } from "../_constants";

export function retailerprovince(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_PROVINCE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_PROVINCE_SUCCESS:
      return {
        retailerprovince: action.retailerprovince,
      };
    case eventConstants.RETAILER_PROVINCE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}