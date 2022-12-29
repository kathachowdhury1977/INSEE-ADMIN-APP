import { eventConstants } from "../_constants";

export function updatecustomertier(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_CUSTOMER_TIER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_CUSTOMER_TIER_SUCCESS:
      return {
        updatecustomertier: action.updatecustomertier,
      };
    case eventConstants.UPDATE_CUSTOMER_TIER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}