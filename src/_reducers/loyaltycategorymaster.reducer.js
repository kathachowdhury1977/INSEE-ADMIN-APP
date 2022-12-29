import { eventConstants } from "../_constants";

export function loyaltycategorymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.LOYALTY_CATEGORY_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.LOYALTY_CATEGORY_MASTER_SUCCESS:
      return {
        loyaltycategorymaster: action.loyaltycategorymaster,
      };
    case eventConstants.LOYALTY_CATEGORY_MASTER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}