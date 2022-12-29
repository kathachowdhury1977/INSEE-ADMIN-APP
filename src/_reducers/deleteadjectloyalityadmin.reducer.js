import { eventConstants } from "../_constants";

export function deleteadjectloyalityadmin(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_ADUJECT_LOYALITY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_ADUJECT_LOYALITY_SUCCESS:
      return {
        deleteadjectloyalityadmin: action.deleteadjectloyalityadmin,
      };
    case eventConstants.DELETE_ADUJECT_LOYALITY_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.DELETE_ADUJECT_LOYALITY_CLEAR_TOAST:
      return {
        deleteadjectloyalityadmin: '',  
        error: '',
      };

    
    default:
      return state;
  }
}