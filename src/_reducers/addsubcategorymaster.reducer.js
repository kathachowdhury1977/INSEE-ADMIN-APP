import { eventConstants } from "../_constants";

export function addsubcategorymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_SUB_CATEGORY_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_SUB_CATEGORY_MASTER_SUCCESS:
      return {
        loading:false,
        addsubcategory: action.addsubcategory,
      };
    case eventConstants.ADD_SUB_CATEGORY_MASTER_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_SUB_CATEGORY_MASTER_RESET:
        return {
        };
    default:
      return state;
  }
}