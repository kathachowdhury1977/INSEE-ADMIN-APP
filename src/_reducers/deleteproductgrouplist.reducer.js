import { eventConstants } from "../_constants";

export function deleteproductgrouplist(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_PRODUCT_GROUP_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_PRODUCT_GROUP_LIST_SUCCESS:
      return {
        deleteproductgrouplist: action.deleteproductgrouplist,
      };
    case eventConstants.DELETE_PRODUCT_GROUP_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}