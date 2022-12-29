import { eventConstants } from "../_constants";

export function deleteactionstatus(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_ACTION_STATUS_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_ACTION_STATUS_SUCCESS:
      return {
        deleteactionstatus: action.deleteactionstatus,
      };
    case eventConstants.DELETE_ACTION_STATUS_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}