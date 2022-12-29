import { eventConstants } from "../_constants";

export function downloadexistingcustomer(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_EXISTING_CUSTOMER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_EXISTING_CUSTOMER_SUCCESS:
      return {
        downloadexistingcustomer: action.downloadexistingcustomer,
      };
    case eventConstants.DOWNLOAD_EXISTING_CUSTOMER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}