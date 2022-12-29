import { eventConstants } from "../_constants";

export function updatecategorymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_CATEGORY_SUCCESS:
      return {
        loading:false,
        updatecategory: action.updatecategory,
      };
    case eventConstants.UPDATE_CATEGORY_FAILURE:
      return {
        error: action.error,
      }; 
      case eventConstants.UPDATE_CATEGORY_RESET:
        return {
        };   
    default:
      return state;
  }
}
