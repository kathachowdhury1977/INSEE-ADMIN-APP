import { eventConstants } from "../_constants";

export function activeproduct(state = {}, action) {
  switch (action.type) {
    case eventConstants.ACTIVE_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ACTIVE_PRODUCT_SUCCESS:
      return {
        activeproduct: action.activeproduct,
      };
    case eventConstants.ACTIVE_PRODUCT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}