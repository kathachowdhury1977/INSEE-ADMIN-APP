import { eventConstants } from "../_constants";

export function existingcustomerlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.EXISTING_CUSTOMER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.EXISTING_CUSTOMER_LIST_SUCCESS:
      return {
        existingcustomerlist: action.existingcustomerlist,
      };
    case eventConstants.EXISTING_CUSTOMER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}