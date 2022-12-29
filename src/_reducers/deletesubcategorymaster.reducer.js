import { eventConstants } from "../_constants";

export function deletesubcategorymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_SUB_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_SUB_CATEGORY_SUCCESS:
      return {
        deletesubcategory: action.deletesubcategory,
      };
    case eventConstants.DELETE_SUB_CATEGORY_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.DELETE_SUB_CATEGORY_RESET:
        return {
        };
    
    default:
      return state;
  }
}