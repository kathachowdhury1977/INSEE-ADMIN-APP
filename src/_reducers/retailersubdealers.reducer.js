import { eventConstants } from "../_constants";

export function retailersubdealers(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_RETAILER_DATA_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_RETAILER_DATA_SUCCESS:
      return {
        retailersubdealers: action.retailersubdealers,
      };
    case eventConstants.GET_RETAILER_DATA_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}