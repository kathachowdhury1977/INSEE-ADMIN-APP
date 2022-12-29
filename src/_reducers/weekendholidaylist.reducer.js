import { eventConstants } from "../_constants";

export function weekendholidaylist(state = {}, action) {
  switch (action.type) {
    case eventConstants.WEEKEND_HOLIDAY_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.WEEKEND_HOLIDAY_LIST_SUCCESS:
      return {
        weekendholidaylist: action.weekendholidaylist,
      };
    case eventConstants.WEEKEND_HOLIDAY_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}