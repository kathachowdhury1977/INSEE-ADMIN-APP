import { eventConstants } from "../_constants";

export function updatecustomerinactive(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_CUSTOMER_INACTIVE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_CUSTOMER_INACTIVE_SUCCESS:
      return {
        updatecustomerinactive: action.updatecustomerinactive,
      };
    case eventConstants.UPDATE_CUSTOMER_INACTIVE_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_CUSTOMER_INACTIVE_CLEAR_TOAST:
        return {
            updatecustomerinactive: undefined,
        };

    
    default:
      return state;
  }
}
