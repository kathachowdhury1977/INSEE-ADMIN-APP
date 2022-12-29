import { eventConstants } from "../_constants";

export function filterproductmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.FILTER_PRODUCT_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.FILTER_PRODUCT_MASTER_SUCCESS:
      return {
        filterproductmaster: action.filterproductmaster,
      };
    case eventConstants.FILTER_PRODUCT_MASTER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}