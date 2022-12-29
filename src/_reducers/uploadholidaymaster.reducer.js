import { eventConstants } from "../_constants";

export function uploadholidaymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_HOLIDAY_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_HOLIDAY_MASTER_SUCCESS:
      return {
        uploadholidaymaster: action.uploadholidaymaster,
      };
    case eventConstants.UPLOAD_HOLIDAY_MASTER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_HOLIDAY_MASTER_CLEAR_STATE:
        return {
            uploadholidaymaster: undefined,
        };

    
    default:
      return state;
  }
}
