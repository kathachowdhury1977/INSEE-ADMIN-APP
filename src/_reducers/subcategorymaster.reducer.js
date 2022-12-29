import { eventConstants } from "../_constants";

export function subcategorymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.SUB_CATEGORY_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SUB_CATEGORY_MASTER_LIST_SUCCESS:
      return {
        getsubcategory: action.getsubcategory,
      };
    case eventConstants.SUB_CATEGORY_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}