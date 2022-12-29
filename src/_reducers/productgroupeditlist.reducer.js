import { eventConstants } from "../_constants";

export function productgroupeditlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_GROUP_EDIT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_GROUP_EDIT_LIST_SUCCESS:
      return {
        productgroupeditlist: action.productgroupeditlist,
      };
    case eventConstants.PRODUCT_GROUP_EDIT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}