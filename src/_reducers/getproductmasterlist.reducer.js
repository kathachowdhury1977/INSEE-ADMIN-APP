import { eventConstants } from "../_constants";

export function productmasterlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_MASTER_SUCCESS:
      return {
        productmasterlist: action.productmasterlist,
      };
    case eventConstants.PRODUCT_MASTER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}