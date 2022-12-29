import { eventConstants } from "../_constants";

export function specialproject(state = {}, action) {
  switch (action.type) {
    case eventConstants.SPECIAL_PROJECT_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SPECIAL_PROJECT_MASTER_LIST_SUCCESS:
      return {
        getspecialproject: action.getspecialproject,
      };
    case eventConstants.SPECIAL_PROJECT_MASTER_LIST_SUCCESS:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}