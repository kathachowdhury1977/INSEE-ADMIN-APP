import { eventConstants } from "../_constants";

export function productgroupmasterlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_GROUP_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_GROUP_MASTER_LIST_SUCCESS:
      return {
        productgroupmasterlist: action.productgroupmasterlist,
      };
    case eventConstants.PRODUCT_GROUP_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.PRODUCT_GROUP_MASTER_LIST_CLEAR_STATE:
      return {
        productgroupmasterlist: undefined,
      };

    
    default:
      return state;
  }
}