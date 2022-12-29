import { eventConstants } from "../_constants";

export function activeproductmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ACTIVE_PRODUCT_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ACTIVE_PRODUCT_MASTER_SUCCESS:
      return {
        activeproductmaster: action.activeproductmaster,
      };
    case eventConstants.ACTIVE_PRODUCT_MASTER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}