import { eventConstants } from "../_constants";

export function getloyalitycalcrules(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_LOYALITY_CALC_RULES_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_LOYALITY_CALC_RULES_SUCCESS:
      return {
        getloyalitycalcrules: action.getloyalitycalcrules,
      };
    case eventConstants.GET_LOYALITY_CALC_RULES_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}