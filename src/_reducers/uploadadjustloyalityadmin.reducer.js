import { eventConstants } from "../_constants";

export function uploadadjustloyalityadmin(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_ADJUST_LOYALITY_ADMIN_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_ADJUST_LOYALITY_ADMIN_SUCCESS:
      return {
        uploadadjustloyalityadmin: action.uploadadjustloyalityadmin,
      };
    case eventConstants.UPLOAD_ADJUST_LOYALITY_ADMIN_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_ADJUST_LOYALITY_ADMIN_CLEAR_TOAST:
      return {
        uploadadjustloyalityadmin: '',  
        error: '',
      };

    
    default:
      return state;
  }
}