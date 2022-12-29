import { eventConstants } from "../_constants";

export function productimagegetlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_PRODUCT_IMAGE_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_PRODUCT_IMAGE_LIST_SUCCESS:
      return {
        productimagegetlist: action.productimagegetlist,
      };
    case eventConstants.GET_PRODUCT_IMAGE_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}