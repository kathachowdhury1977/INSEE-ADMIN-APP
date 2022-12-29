import { eventConstants } from "../_constants";

export function addactioncategorymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_ACTION_CATEGORY_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_ACTION_CATEGORY_MASTER_SUCCESS:
      return {
        loading:false,
        addactioncategory: action.addactioncategory,
      };
    case eventConstants.ADD_ACTION_CATEGORY_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_ACTION_CATEGORY_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}