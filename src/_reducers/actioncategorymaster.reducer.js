import { eventConstants } from "../_constants";

export function actioncategorymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ACTION_CATEGORY_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ACTION_CATEGORY_MASTER_LIST_SUCCESS:
      return {
        getactioncategory : action.getactioncategory,
      };
    case eventConstants.ACTION_CATEGORY_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}