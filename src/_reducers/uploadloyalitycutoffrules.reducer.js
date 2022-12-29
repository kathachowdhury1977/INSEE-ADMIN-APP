import { eventConstants } from "../_constants";

export function uploadloyalitycutoffrules(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_LOYALITY_CUTOFF_RULES_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_LOYALITY_CUTOFF_RULES_SUCCESS:
      return {
        uploadloyalitycutoffrules: action.uploadloyalitycutoffrules,
      };
    case eventConstants.UPLOAD_LOYALITY_CUTOFF_RULES_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_LOYALITY_CUTOFF_RULES_CLEAR_TOAST:
      return {
        uploadloyalitycutoffrules: '',  
        error: '',
      };

    
    default:
      return state;
  }
}