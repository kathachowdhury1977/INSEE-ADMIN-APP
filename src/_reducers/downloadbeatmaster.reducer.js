import { eventConstants } from "../_constants";

export function downloadbeatmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_BEAT_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_BEAT_MASTER_SUCCESS:
      return {
        downloadbeatmaster: action.downloadbeatmaster,
      };
    case eventConstants.DOWNLOAD_BEAT_MASTER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}