import { eventConstants } from "../_constants";

export function getautocustomertier(state = {}, action) {
  switch (action.type) {
    case eventConstants.CUSTOMER_AUTO_TIER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CUSTOMER_AUTO_TIER_SUCCESS:
      return {
        getautocustomertier: action.getautocustomertier,
      };
    case eventConstants.CUSTOMER_AUTO_TIER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}