import { eventConstants } from "../_constants";

export function getloyalitycutoffrules(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_LOYALITY_CUTOFF_RULES_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_LOYALITY_CUTOFF_RULES_SUCCESS:
      return {
        getloyalitycutoffrules: action.getloyalitycutoffrules,
      };
    case eventConstants.GET_LOYALITY_CUTOFF_RULES_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}