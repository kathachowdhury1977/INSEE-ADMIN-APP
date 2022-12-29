import { eventConstants } from "../_constants";

export function updateexistingcustomer(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_EXISTING_CUSTOMER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_EXISTING_CUSTOMER_SUCCESS:
      return {
        updateexistingcustomer: action.updateexistingcustomer,
      };
    case eventConstants.UPDATE_EXISTING_CUSTOMER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_EXISTING_CUSTOMER_CLEAR_TOAST:
        return {
            updateexistingcustomer: undefined,
        };

    
    default:
      return state;
  }
}
