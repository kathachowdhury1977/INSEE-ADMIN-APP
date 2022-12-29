import { eventConstants } from "../_constants";

export function productmasteractiveinactive(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_MASTER_ACTIVE_INACTIVE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_MASTER_ACTIVE_INACTIVE_SUCCESS:
      return {
        productmasteractiveinactive: action.productmasteractiveinactive,
      };
    case eventConstants.PRODUCT_MASTER_ACTIVE_INACTIVE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}