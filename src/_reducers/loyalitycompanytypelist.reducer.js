import { eventConstants } from "../_constants";

export function loyalitycompanytypelist(state = {}, action) {
  switch (action.type) {
    case eventConstants.LOYALTY_COMPANY_TYPE_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.LOYALTY_COMPANY_TYPE_LIST_SUCCESS:
      return {
        loyalitycompanytypelist: action.loyalitycompanytypelist,
      };
    case eventConstants.LOYALTY_COMPANY_TYPE_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}