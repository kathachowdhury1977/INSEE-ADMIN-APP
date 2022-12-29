import { eventConstants } from "../_constants";

export function adjustreportlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADJUST_REPORT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADJUST_REPORT_LIST_SUCCESS:
      return {
        adjustreportlist: action.adjustreportlist,
      };
    case eventConstants.ADJUST_REPORT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}