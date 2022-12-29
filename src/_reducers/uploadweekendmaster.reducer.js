import { eventConstants } from "../_constants";

export function uploadweekendmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_WEEKEND_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_WEEKEND_MASTER_SUCCESS:
      return {
        uploadweekendmaster: action.uploadweekendmaster,
      };
    case eventConstants.UPLOAD_WEEKEND_MASTER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_WEEKEND_MASTER_CLEAR_STATE:
        return {
            uploadweekendmaster: undefined,
        };

    
    default:
      return state;
  }
}
