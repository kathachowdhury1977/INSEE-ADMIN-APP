import { eventConstants } from "../_constants";

export function uploadproductgroup(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_PRODUCT_GROUP_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_PRODUCT_GROUP_SUCCESS:
      return {
        uploadproductgroup: action.uploadproductgroup,
      };
    case eventConstants.UPLOAD_PRODUCT_GROUP_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}