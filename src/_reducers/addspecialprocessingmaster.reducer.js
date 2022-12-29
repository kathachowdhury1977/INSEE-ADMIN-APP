import { eventConstants } from "../_constants";

export function addspecialprojectmaster (state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_SPECIAL_PROJECT_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_SPECIAL_PROJECT_MASTER_SUCCESS:
      return {
        loading:false,
        addspecialproject: action.addspecialproject,
      };
    case eventConstants.ADD_SPECIAL_PROJECT_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_SPECIAL_PROJECT_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}