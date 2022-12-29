import { eventConstants } from "../_constants";

export function activitytarget(state = {}, action) {
  switch (action.type) {
    case eventConstants.ACTIVITY_TARGET_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ACTIVITY_TARGET_LIST_SUCCESS:
      return {
        activitytarget: action.activitytarget,
      };
    case eventConstants.ACTIVITY_TARGET_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}