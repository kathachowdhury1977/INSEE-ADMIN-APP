import { eventConstants } from "../_constants";

export function productgroupdetaillist(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_GROUP_DETAIL_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_GROUP_DETAIL_LIST_SUCCESS:
      return {
        productgroupdetaillist: action.productgroupdetaillist,
      };
    case eventConstants.PRODUCT_GROUP_DETAIL_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}