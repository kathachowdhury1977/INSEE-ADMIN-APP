import { eventConstants } from "../_constants";

export function downloadretailerexcel(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_RETAILER_EXCEL_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_RETAILER_EXCEL_SUCCESS:
      return {
        downloadretailerexcel: action.downloadretailerexcel,
      };
    case eventConstants.DOWNLOAD_RETAILER_EXCEL_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}