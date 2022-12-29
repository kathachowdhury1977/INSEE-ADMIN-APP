import { eventConstants } from "../_constants";

export function updateAdjustLoyalityAdmin(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_ADJUCT_LOYALITY_ADMIN_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_ADJUCT_LOYALITY_ADMIN_SUCCESS:
      return {
        updateAdjustLoyalityAdmin: action.updateAdjustLoyalityAdmin,
      };
    case eventConstants.UPDATE_ADJUCT_LOYALITY_ADMIN_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}