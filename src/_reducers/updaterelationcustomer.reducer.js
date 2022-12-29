import { eventConstants } from "../_constants";

export function updaterelationcustomer(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_RELATION_CUSTOMER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_RELATION_CUSTOMER_SUCCESS:
      return {
        updaterelationcustomer: action.updaterelationcustomer,
      };
    case eventConstants.UPDATE_RELATION_CUSTOMER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_RELATION_CUSTOMER_CLEAR_TOAST:
        return {
            updaterelationcustomer: undefined,
        };

    
    default:
      return state;
  }
}
