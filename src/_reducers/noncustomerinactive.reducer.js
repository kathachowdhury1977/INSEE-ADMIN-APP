import { eventConstants } from "../_constants";

export function noncustomerinactive(state = {}, action) {
  switch (action.type) {
    case eventConstants.NON_CUSTOMER_INACTIVE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.NON_CUSTOMER_INACTIVE_SUCCESS:
      return {
        noncustomerinactive: action.noncustomerinactive,
      };
    case eventConstants.NON_CUSTOMER_INACTIVE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}