import { eventConstants } from "../_constants";

export function volumeallocationloyaltyreport(state = {}, action) {
  switch (action.type) {
    case eventConstants.VOLUME_ALLOCATION_LOYALTY_REPORT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.VOLUME_ALLOCATION_LOYALTY_REPORT_SUCCESS:
      return {
        volumeallocationloyaltyreport: action.volumeallocationloyaltyreport,
      };
    case eventConstants.VOLUME_ALLOCATION_LOYALTY_REPORT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}