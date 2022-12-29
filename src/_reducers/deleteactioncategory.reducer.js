import { eventConstants } from "../_constants";

export function deleteactioncategory(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_ACTION_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_ACTION_CATEGORY_SUCCESS:
      return {
        deleteactioncategory: action.deleteactioncategory,
      };
    case eventConstants.DELETE_ACTION_CATEGORY_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}