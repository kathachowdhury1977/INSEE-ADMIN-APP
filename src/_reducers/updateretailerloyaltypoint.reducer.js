import { eventConstants } from "../_constants";

export function updateretailerloyaltypoint(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_RETAILER_LOYALTY_POINT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_RETAILER_LOYALTY_POINT_SUCCESS:
      return {
        updateretailerloyaltypoint: action.updateretailerloyaltypoint,
      };
    case eventConstants.UPDATE_RETAILER_LOYALTY_POINT_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_RETAILER_LOYALTY_POINT_CLEAR_TOAST:
        return {
            updateretailerloyaltypoint: undefined,
        };

    
    default:
      return state;
  }
}