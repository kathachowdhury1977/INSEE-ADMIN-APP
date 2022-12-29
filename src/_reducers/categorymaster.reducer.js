import { eventConstants } from "../_constants";

export function categorymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.CATEGORY_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CATEGORY_MASTER_LIST_SUCCESS:
      return {
        getcategory: action.getcategory,
      };
    case eventConstants.CATEGORY_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}