import { eventConstants } from "../_constants";

export function downloadsubdealeractivity(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_SUB_DEALER_ACTIVITY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_SUB_DEALER_ACTIVITY_SUCCESS:
      return {
        downloadsubdealeractivity: action.downloadsubdealeractivity,
      };
    case eventConstants.DOWNLOAD_SUB_DEALER_ACTIVITY_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}