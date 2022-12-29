import { eventConstants } from "../_constants";

export function adjustloyaltydeleteadmin(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADJUST_LOYALTY_DELETE_ADMIN_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADJUST_LOYALTY_DELETE_ADMIN_SUCCESS:
      return {
        adjustloyaltydeleteadmin: action.adjustloyaltydeleteadmin,
      };
    case eventConstants.ADJUST_LOYALTY_DELETE_ADMIN_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.ADJUST_LOYALTY_DELETE_ADMIN_CLEAR_TOAST:
        return {
            adjustloyaltydeleteadmin: '',
            error: ''
        };

    
    default:
      return state;
  }
}