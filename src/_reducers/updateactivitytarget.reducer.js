import { eventConstants } from "../_constants";

export function updateactivitytarget(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_ACTIVITY_TARGET_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_ACTIVITY_TARGET_SUCCESS:
      return {
        updateactivitytarget: action.updateactivitytarget,
      };
    case eventConstants.UPDATE_ACTIVITY_TARGET_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_ACTIVITY_TARGET_CLEAR_TOAST:
        return {
            updateactivitytarget: undefined,
        };

    
    default:
      return state;
  }
}
