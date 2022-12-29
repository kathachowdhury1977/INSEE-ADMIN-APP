import { eventConstants } from "../_constants";

export function subdealeractivitypoint(state = {}, action) {
  switch (action.type) {
    case eventConstants.SUB_DEALER_ACTIVITY_POINT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SUB_DEALER_ACTIVITY_POINT_SUCCESS:
      return {
        subdealeractivitypoint: action.subdealeractivitypoint,
      };
    case eventConstants.SUB_DEALER_ACTIVITY_POINT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}