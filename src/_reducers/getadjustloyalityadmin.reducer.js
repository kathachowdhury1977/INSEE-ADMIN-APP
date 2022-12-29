import { eventConstants } from "../_constants";

export function getadjustloyalityadmin(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_ADJUCT_LOYALITY_ADMIN_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_ADJUCT_LOYALITY_ADMIN_SUCCESS:
      return {
        getadjustloyalityadmin: action.getadjustloyalityadmin,
      };
    case eventConstants.GET_ADJUCT_LOYALITY_ADMIN_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}