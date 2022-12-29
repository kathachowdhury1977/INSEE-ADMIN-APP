import { eventConstants } from "../_constants";

export function addholidaymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_HOLIDAY_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_HOLIDAY_MASTER_SUCCESS:
      return {
        addholidaymaster: action.addholidaymaster,
      };
    case eventConstants.ADD_HOLIDAY_MASTER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.ADD_HOLIDAY_MASTER_CLEAR_STATE:
        return {
            addholidaymaster: undefined,
        };

    
    default:
      return state;
  }
}
