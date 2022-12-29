import { eventConstants } from "../_constants";

export function dealeractivityPoint(state = {}, action) {
  switch (action.type) {
    case eventConstants.DEALER_ACTIVITY_POINT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DEALER_ACTIVITY_POINT_SUCCESS:
      return {
        dealeractivityPoint: action.dealeractivityPoint,
      };
    case eventConstants.DEALER_ACTIVITY_POINT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}