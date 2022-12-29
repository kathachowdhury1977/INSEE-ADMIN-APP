import { eventConstants } from "../_constants";

export function adjustloyaltyreport(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADJUST_LOYALTY_REPORT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADJUST_LOYALTY_REPORT_SUCCESS:
      return {
        adjustloyaltyreport: action.adjustloyaltyreport,
      };
    case eventConstants.ADJUST_LOYALTY_REPORT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}