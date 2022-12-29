import { eventConstants } from "../_constants";

export function adjustloyaltyadminfilter(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADJUST_LOYALTY_ADMIN_FILTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADJUST_LOYALTY_ADMIN_FILTER_SUCCESS:
      return {
        adjustloyaltyadminfilter: action.adjustloyaltyadminfilter,
      };
    case eventConstants.ADJUST_LOYALTY_ADMIN_FILTER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}