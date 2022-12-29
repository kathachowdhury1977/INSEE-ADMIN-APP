import { eventConstants } from "../_constants";

export function uploadbeatList(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_BEAT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_BEAT_LIST_SUCCESS:
      return {
        uploadbeatList: action.uploadbeatList,
      };
    case eventConstants.UPLOAD_BEAT_LIST_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_BEAT_LIST_CLEAR_STATE:
        return {
            uploadbeatList: undefined,
        };

    
    default:
      return state;
  }
}
