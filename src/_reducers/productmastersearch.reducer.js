import { eventConstants } from "../_constants";

export function productmastersearch(state = {}, action) {
  switch (action.type) {
    case eventConstants.PPRODUCT_MASTER_SEARCH_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_MASTER_SEARCH_SUCCESS:
      return {
        productmastersearch: action.productmastersearch,
      };
    case eventConstants.PRODUCT_MASTER_SEARCH_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}