import { eventConstants } from "../_constants";

export function deleteproductimage(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_PRODUCT_IMAGE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_PRODUCT_IMAGE_SUCCESS:
      return {
        deleteproductimage: action.deleteproductimage,
      };
    case eventConstants.DELETE_PRODUCT_IMAGE_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.DELETE_PRODUCT_IMAGE_CLEAR_STATE:
      return {
        deleteproductimage: undefined,
      };

    
    default:
      return state;
  }
}