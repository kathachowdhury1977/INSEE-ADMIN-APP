import { eventConstants } from "../_constants";

export function deleteloyalitycutoffrules(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_LOYALITY_CUTOFF_RULES_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_LOYALITY_CUTOFF_RULES_SUCCESS:
      return {
        deleteloyalitycutoffrules: action.deleteloyalitycutoffrules,
      };
    case eventConstants.DELETE_LOYALITY_CUTOFF_RULES_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.DELETE_LOYALITY_CUTOFF_RULES_CLEAR_TOAST:
      return {
        deleteloyalitycutoffrules: '',  
        error: '',
      };

    
    default:
      return state;
  }
}