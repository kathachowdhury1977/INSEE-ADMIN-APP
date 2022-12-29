import { eventConstants } from "../_constants";

export function productmasterdetail(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_MASTER_DETAIL_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_MASTER_DETAIL_SUCCESS:
      return {
        productmasterdetail: action.productmasterdetail,
      };
    case eventConstants.PRODUCT_MASTER_DETAIL_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}