import { eventConstants } from "../_constants";

export function downloadcustomertier(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_CUSTOMER_TIER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_CUSTOMER_TIER_SUCCESS:
      return {
        downloadcustomertier: action.downloadcustomertier,
      };
    case eventConstants.DOWNLOAD_CUSTOMER_TIER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}