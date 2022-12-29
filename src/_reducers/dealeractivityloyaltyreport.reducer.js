import { eventConstants } from "../_constants";

export function dealeractivityloyaltyreport(state = {}, action) {
  switch (action.type) {
    case eventConstants.DEALER_ACTIVITY_LOYALTY_REPORT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DEALER_ACTIVITY_LOYALTY_REPORT_SUCCESS:
      return {
        dealeractivityloyaltyreport: action.dealeractivityloyaltyreport,
      };
    case eventConstants.DEALER_ACTIVITY_LOYALTY_REPORT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}