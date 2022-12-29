import { eventConstants } from "../_constants";

export function updateactioncategory(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_ACTION_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_ACTION_CATEGORY_SUCCESS:
      return {
        updateactioncategory: action.updateactioncategory,
      };
    case eventConstants.UPDATE_ACTION_CATEGORY_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}