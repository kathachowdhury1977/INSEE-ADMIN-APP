import { eventConstants } from "../_constants";

export function getloyaltypointlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.LOYALTY_POINT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.LOYALTY_POINT_LIST_SUCCESS:
      return {
        getloyaltypointlist: action.getloyaltypointlist,
      };
    case eventConstants.LOYALTY_POINT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}