import { eventConstants } from "../_constants";

export function downloadnoninactivecustomer(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_INACTIVE_CUSTOMER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_INACTIVE_CUSTOMER_SUCCESS:
      return {
        downloadnoninactivecustomer: action.downloadnoninactivecustomer,
      };
    case eventConstants.DOWNLOAD_INACTIVE_CUSTOMER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}