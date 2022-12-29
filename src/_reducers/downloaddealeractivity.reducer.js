import { eventConstants } from "../_constants";

export function downloaddealeractivity(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_DEALER_ACTIVITY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_DEALER_ACTIVITY_SUCCESS:
      return {
        downloaddealeractivity: action.downloaddealeractivity,
      };
    case eventConstants.DOWNLOAD_DEALER_ACTIVITY_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}