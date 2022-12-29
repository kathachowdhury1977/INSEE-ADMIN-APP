import { eventConstants } from "../_constants";

export function producttypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_TYPE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_TYPE_MASTER_LIST_SUCCESS:
      return {
        getproducttype: action.getproducttype,
      };
    case eventConstants.PRODUCT_TYPE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}