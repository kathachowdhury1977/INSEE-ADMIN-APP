import { eventConstants } from "../_constants";

export function downloadretailersubdealer(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_RETAILER_SUBDEALER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_RETAILER_SUBDEALER_SUCCESS:
      return {
        downloadretailersubdealer: action.downloadretailersubdealer,
      };
    case eventConstants.DOWNLOAD_RETAILER_SUBDEALER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}