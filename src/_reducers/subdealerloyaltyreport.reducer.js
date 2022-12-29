import { eventConstants } from "../_constants";

export function subdealerloyaltyreport(state = {}, action) {
  switch (action.type) {
    case eventConstants.SUB_DEALER_LOYALTY_REPORT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SUB_DEALER_LOYALTY_REPORT_SUCCESS:
      return {
        subdealerloyaltyreport: action.subdealerloyaltyreport,
      };
    case eventConstants.SUB_DEALER_LOYALTY_REPORT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}