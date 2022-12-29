import { eventConstants } from "../_constants";

export function uploadloyalitycalcrules(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_LOYALITY_CALC_RULES_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_LOYALITY_CALC_RULES_SUCCESS:
      return {
        uploadloyalitycalcrules: action.uploadloyalitycalcrules,
      };
    case eventConstants.UPLOAD_LOYALITY_CALC_RULES_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_LOYALITY_CALC_RULES_CLEAR_TOAST:
      return {
        uploadloyalitycalcrules: '',  
        error: '',
      };

    
    default:
      return state;
  }
}