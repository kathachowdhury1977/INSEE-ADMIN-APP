import { eventConstants } from "../_constants";

export function downloadproductgroup(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_PRODUCT_GROUP_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_PRODUCT_GROUP_SUCCESS:
      return {
        downloadproductgroup: action.downloadproductgroup,
      };
    case eventConstants.DOWNLOAD_PRODUCT_GROUP_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}