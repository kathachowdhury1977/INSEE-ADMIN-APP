import { eventConstants } from "../_constants";

export function addcategorymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_CATEGORY_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_CATEGORY_MASTER_SUCCESS:
      return {
        loading : false,
        addcategory: action.addcategory,
      };
    case eventConstants.ADD_CATEGORY_MASTER_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_CATEGORY_MASTER_RESET:
        return {
        };
        case eventConstants.ADD_CATEGORY_MASTER_CLEAR_TOAST:
          return {
            addcategory : '',
            error: ''
          };
    default:
      return state;
  }
}