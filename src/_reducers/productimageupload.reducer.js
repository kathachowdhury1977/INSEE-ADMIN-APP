import { eventConstants } from "../_constants";

export function productimageupload(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_IMAGE_UPLOAD_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_IMAGE_UPLOAD_SUCCESS:
      return {
        productimageupload: action.productimageupload,
      };
    case eventConstants.PRODUCT_IMAGE_UPLOAD_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.PRODUCT_IMAGE_UPLOAD_CLEAR_STATE:
      return {
        productimageupload: undefined,
      };

    
    default:
      return state;
  }
}