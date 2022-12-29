import { eventConstants } from "../_constants";

export function productclassificationlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_CLASSIFICATION_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_CLASSIFICATION_LIST_SUCCESS:
      return {
        productclassificationlist: action.productclassificationlist,
      };
    case eventConstants.PRODUCT_CLASSIFICATION_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}
