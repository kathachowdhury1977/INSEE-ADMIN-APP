import { eventConstants } from "../_constants";

export function updateholidaymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_HOLIDAY_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_HOLIDAY_MASTER_SUCCESS:
      return {
        updateholidaymaster: action.updateholidaymaster,
      };
    case eventConstants.UPDATE_HOLIDAY_MASTER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_HOLIDAY_MASTER_CLEAR_STATE:
        return {
            updateholidaymaster: undefined,
        };

    
    default:
      return state;
  }
}
