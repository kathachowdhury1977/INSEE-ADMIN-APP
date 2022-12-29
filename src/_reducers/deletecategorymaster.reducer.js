import { eventConstants } from "../_constants";

export function deletecategorymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_CATEGORY_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_CATEGORY_MASTER_SUCCESS:
      return {
        loading:false,
        deletecategory: action.deletecategory,
      };
    case eventConstants.DELETE_CATEGORY_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.DELETE_CATEGORY_MASTER_RESET:
        return {
        };  

    default:
      return state;
  }
}