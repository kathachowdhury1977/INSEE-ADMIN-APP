import { eventConstants } from "../_constants";

export function deletecategorylist(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_CATEGORY_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_CATEGORY_LIST_SUCCESS:
      return {
        deletecategorylist: action.deletecategorylist,
      };
    case eventConstants.DELETE_CATEGORY_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}
