import { eventConstants } from "../_constants";

export function relationwithcustomer(state = {}, action) {
  switch (action.type) {
    case eventConstants.RELATION_WITH_CUSTOMER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RELATION_WITH_CUSTOMER_SUCCESS:
      return {
        relationwithcustomer: action.relationwithcustomer,
      };
    case eventConstants.RELATION_WITH_CUSTOMER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}