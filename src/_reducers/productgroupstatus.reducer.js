import { eventConstants } from "../_constants";

export function productgroupstatus(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_GROUP_STATUS_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_GROUP_STATUS_SUCCESS:
      return {
        productgroupstatus: action.productgroupstatus,
      };
    case eventConstants.PRODUCT_GROUP_STATUS_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}