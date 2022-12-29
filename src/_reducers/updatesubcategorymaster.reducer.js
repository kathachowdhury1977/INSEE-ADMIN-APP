import { eventConstants } from "../_constants";

export function updatesubcategorymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_SUB_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_SUB_CATEGORY_SUCCESS:
      return {
        updatesubcategory: action.updatesubcategory,
      };
    case eventConstants.UPDATE_SUB_CATEGORY_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.UPDATE_SUB_CATEGORY_RESET:
        return {
        };
    
    default:
      return state;
  }
}