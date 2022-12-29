import { eventConstants } from "../_constants";

export function allexpiredcalcrules(state = {}, action) {
  switch (action.type) {
    case eventConstants.ALL_EXPIRED_EXPIRE_RULES_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ALL_EXPIRED_EXPIRE_RULES_SUCCESS:
      return {
        allexpiredcalcrules: action.allexpiredcalcrules,
      };
    case eventConstants.ALL_EXPIRED_EXPIRE_RULES_FAILURE:
      return {
        error: action.error,
      };


     
    
    default:
      return state;
  }
}