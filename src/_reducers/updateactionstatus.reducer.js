import { eventConstants } from "../_constants";

export function updateactionstatus(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_ACTION_STATUS_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_ACTION_STATUS_SUCCESS:
      return {
        updateactionstatus: action.updateactionstatus,
      };
    case eventConstants.UPDATE_ACTION_STATUS_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}