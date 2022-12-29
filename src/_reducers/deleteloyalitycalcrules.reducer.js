import { eventConstants } from "../_constants";

export function deleteloyalitycalcrules(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_LOYALITY_CALC_RULES_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_LOYALITY_CALC_RULES_SUCCESS:
      return {
        deleteloyalitycalcrules: action.deleteloyalitycalcrules,
      };
    case eventConstants.DELETE_LOYALITY_CALC_RULES_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.DELETE_LOYALITY_CALC_RULES_CLEAR_TOAST:
      return {
        deleteloyalitycalcrules: '',  
        error: '',
      };

    
    default:
      return state;
  }
}