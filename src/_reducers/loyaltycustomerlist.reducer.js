import { eventConstants } from "../_constants";

export function loyaltycustomerlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.LOYALTY_CUSTOMER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.LOYALTY_CUSTOMER_LIST_SUCCESS:
      return {
        loyaltycustomerlist: action.loyaltycustomerlist,
      };
    case eventConstants.LOYALTY_CUSTOMER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}