import { eventConstants } from "../_constants";

export function downloadactivtytarget(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_ACTIVITY_TARGET_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_ACTIVITY_TARGET_SUCCESS:
      return {
        downloadactivtytarget: action.downloadactivtytarget,
      };
    case eventConstants.DOWNLOAD_ACTIVITY_TARGET_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}