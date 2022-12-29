import { eventConstants } from "../_constants";

export function productmasterid(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_MASTER_ID_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_MASTER_ID_SUCCESS:
      return {
        productmasterid: action.productmasterid,
      };
    case eventConstants.PRODUCT_MASTER_ID_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}