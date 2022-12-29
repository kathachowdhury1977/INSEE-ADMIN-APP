import { eventConstants } from "../_constants";

export function uploadactivitytarget(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_ACTIVITY_TARGET_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_ACTIVITY_TARGET_SUCCESS:
      return {
        uploadactivitytarget: action.uploadactivitytarget,
      };
    case eventConstants.UPLOAD_ACTIVITY_TARGET_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_ACTIVITY_TARGET_CLEAR_STATE:
        return {
            uploadactivitytarget: undefined,
        };

    
    default:
      return state;
  }
}
